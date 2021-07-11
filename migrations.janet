(use praxis)
(import praxis/sqlite :as db)

(defn v1-up [file] 
  (s/defschema
    Condition
    (s/field :rowid :integer)
    (s/field :name :string)
    (s/field :description :string))

  (s/defschema
    Medication
    (s/field :rowid :integer)
    (s/field :name :integer :title "Medication Name")
    (s/field :dose-per-pill :number :title "Dose per pill")
    (s/field :dose-unit :string :title "Dose unit"))

  (s/defschema 
    DosingPlan
    (s/field :rowid :integer)
    (s/field :medication_id :integer)
    # Can be one of daily, weekly, monthly or yearly
    (s/field :dose-interval :string :title "Dosage interval")
    (s/field :doses-per-interval :number :title "Doses per interval"))

  (s/defschema 
    MedicineStock
    (s/field :rowid :integer)
    (s/field :medicine_id :integer :fk Medicine)
    (s/field :quantity-of-doses :integer)
    # Is a year-month-day string
    (s/field :effective-date :string))

  (s/defschema 
    Notes
    (s/field :rowid :integer)
    (s/field :text :string)
    (s/field :created :integer)
    (s/field :updated :integer))
  (db/tx file
         (db/init [Condition Medication DosingPlan MedicineStock Notes]))
  )

(defn v1-down [file] 
  (db/tx file
         (db/drop-tables Condition Medication DosingPlan Medication Notes)
  ))

(def versions [{:version 1 :up v1-up :down v1-down}])



