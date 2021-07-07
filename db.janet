(use praxis)
(import praxis/sqlite :as db)

# These schemata represent a snapshot of the current database
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
  (s/field :effective-date :string)


(s/defschema 
  Notes
  (s/field :rowid :integer)
  (s/field :text :string)
  (s/field :created :integer)
  (s/field :updated :integer))

# (db/join-table Condition Medication :many-to-many)
# (db/join-table Notes Medication :many-to-many)
# (db/join-table Notes Condition :many-to-many)
