(use praxis)
(import praxis/sqlite :as db)
(use ./schema)

(defn create [file] 
  #(setdyn :praxis/sqltrace true)
  (db/tx
    file
    (db/init [Condition Medication DosingPlan MedicineStock Notes]))
  (print "created database!"))

(defn list-meds [file] 
  (db/tx
    file
    (map |(s/cast 
            :from $ 
            :to form/MediDose 
            :fields (form/MediDose :field-order))
         (db/eval `
            Select 
             med.rowid as med_rowid, 
             med.name, 
             med.dose_per_pill, 
             med.dose_unit,
             dose.rowid as does_rowid,
             COALESCE(dose.dose_interval, 'Unset') as dose_interval,
             COALESCE(dose.doses_per_interval, 'Unset') as doses_per_interval
             from Medication as med
             left join DosingPlan as dose on dose.medication_id = med.rowid
             `))))

(defn- insert-med [medPx]
    (db/insert Medication medPx))
(defn- insert-dosing-plan [dosePlanPx]
  (db/insert DosingPlan dosePlanPx))


(defn add-med [file med] 
  (def mediDose (form/MediDose/validate med))

  (when (s/has-errors? mediDose)
    (break [:err mediDose]))

  (def medPx (Medication/insert-validate med))
                   
  (if-not (s/has-errors? medPx)
    (do 
      (db/tx file
        (def medId (insert-med medPx))
        (def dosePlanPx (DosingPlan/insert-validate (merge med {:medication_id medId})))
        (when (s/has-errors? dosePlanPx)
          (error "!!!"))
        (insert-dosing-plan dosePlanPx)
        [:ok medId])
    [:err medPx])
  ))

(defn list-conditions [file]
  (db/tx
    file
    (map |(s/cast 
            :from $ 
            :to Condition 
            :fields (tracev (keys $)))
         (db/eval "Select rowid, name, description from Condition"))))

(defn- insert-cond [file condPx]
  (db/tx
    file
    (db/insert Condition condPx)))

(defn add-condition [file condi] 
  (def _cond (s/cast 
             :from condi 
             :to Condition 
             :fields [:name :description]))
  (if-not (s/has-errors? _cond)
    (do 
      (def condDb (insert-cond file _cond))
      [:ok condDb])
    [:err _cond])
  )

