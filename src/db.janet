(use praxis)
(import praxis/sqlite :as db)

# These schemata represent a snapshot of the current database
(s/defschema
  Condition
  (s/field :rowid :integer :hidden true)
  (s/field :name :string :title "Name")
  (s/field :description :text :title "Description"))

(s/defschema
  Medication
  (s/field :rowid :integer :hidden true)
  (s/field :name :string :title "Medication Name")
  (s/field :dose_per_pill :number :title "Dose per pill")
  (s/field :dose_unit :string :title "Dose unit"))

(s/defschema 
  DosingPlan
  (s/field :rowid :integer)
  (s/field :medication_id :integer)
  # Can be one of daily, weekly, monthly or yearly
  (s/field :dose_interval :string :title "Dosage interval")
  (s/field :doses_per_interval :number :title "Doses per interval"))

(s/defschema 
  MedicineStock
  (s/field :rowid :integer)
  (s/field :medicine_id :integer :fk Medication)
  (s/field :quantity_of_doses :integer)
  # Is a year-month-day string
  (s/field :effective_date :string))

(s/defschema 
  Notes
  (s/field :rowid :integer)
  (s/field :text :string)
  (s/field :created :integer)
  (s/field :updated :integer))

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
            :to Medication 
            :fields (tracev (keys $)))
         (db/eval "Select rowid, name, dose_per_pill, dose_unit from Medication"))))

(defn- insert-med [file medPx]
  (db/tx
    file
    (db/insert Medication medPx)))

(defn add-med [file med] 
  (def med (s/cast 
             :from med 
             :to Medication 
             :fields [:name :dose_per_pill :dose_unit]))
  (if-not (s/has-errors? med)
    (do 
      (def medDb (insert-med file med))
      [:ok medDb])
    [:err med])
  )

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

# resume with
# eye db.janet migrations.janet project.janet routes.janet server.janet tally.janet time.janet views.janet test --cmd janet tally.janet createdb test.db
# (db/join-table Condition Medication :many-to-many)
# (db/join-table Notes Medication :many-to-many)
# (db/join-table Notes Condition :many-to-many)
