(use praxis)

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

(s/defschema
  form/MediDose
  # Fields from medication
  (s/field :med_rowid :integer :hidden true)
  (s/field :name :string :title "Medication Name")
  (s/field :dose_per_pill :number :title "Dose Per Pill")
  (s/field :dose_unit :string :title "Dose unit")
  # Fields from dosing plan
  (s/field :plan_rowid :integer :hidden true)
  (s/field :dose_interval :picklist :title "Dosage Interval" 
           :values [{:value "daily" :title "Daily" :active true} 
                    {:value "weekly" :title "Weekly" :active true} 
                    {:value "monthly" :title "Monthly" :active true } 
                    {:value "yearly" :title "Yearly" :active true } ])
  (s/field :doses_per_interval :number :title "Doses per interval"))

(defn Medication/insert-validate [params]  
  (s/cast :from params 
          :to Medication 
          :fields [:name :dose_per_pill :dose_unit]))
(defn DosingPlan/insert-validate [params]
  (s/cast :from params
          :to DosingPlan
          :fields [:medication_id :dose_interval :doses_per_interval]))


(defn form/MediDose/validate [params] 
  (as-> (s/cast :to form/MediDose :from params :fields (form/MediDose :field-order)) it
        (s/validate-fn it :dose_per_interval (fn [_] get-in it [:vals :medication_id]) "Failed to add a medication id!")))
           


