(import janet-html :as html)
(use praxis)
(use markable)

(import ./db)
(use ./schema)
(import ./routes :as rt)


(defn s. [& args] (string ;args))

(defn layout [body] 
  (html/encode 
    (html/doctype :html5)
    [:html {:lang "en"}
     [:head
      [:meta :charset "utf-8"]
      [:meta 
       :name "viewport" 
       :content "width=device-width, initial-scale=1.0" ]
      [:link {:rel "stylesheet" :href "/base.css" }] ]
     [:body body]]))


(defn header-link [title href] [:h3 [:a {:href href} title]])

(defn home [] 
  (layout 
    [:div
     [:h2 "MediTally"]
     (header-link "Medications" (rt/medications<-))
     (header-link "Conditions" (rt/conditions<-))
     [:br]
     ]))

(defn conditions [conds &opt wip-cond] 
  (layout 
    [:div 
     [:h2 "Conditions"]
     [:a {:href rt/home} "(back to main)"]
      (if (> (length conds) 0)
        (r/table Condition conds 
                 :ord [:name :description] 
                 :computed {:name
                            {:title "Name"
                            :fn (fn [r] [:a {:href (rt/condition-by-id<- (r :rowid))} (r :name)])
                            }})
        [:div "No conditions yet, add one?"]
        )
     [:h3 "Add new condition"]
     (r/form (or wip-cond (s/empty-of Condition))
             :action (rt/conditions<-)
             :submit-txt "Add condition")
     ])
  )

(defn medications [meds &opt wip-med] 
  (def tbl-mediDose meds)
  (layout 
    [:div 
     [:h2 "Medications"]
     [:a {:href rt/home} "(back to main)"]
      (if (> (length meds) 0)
        (do
          (pp meds)
          (r/table form/MediDose tbl-mediDose
                   :ord [:name :dose_unit :dose_per_pill :dose_interval :doses_per_interval] 
                   :computed {:name
                              {:title "Name"
                               :fn (fn [r] (pp r) [:a {:href (rt/medication-by-id<- (r :med_rowid))} (r :name)])
                               }}))
        [:div "No meds yet, add one?"]
        )
     [:h3 "Add new medication"]
     (r/form (or wip-med (s/empty-of form/MediDose))
             :action (rt/medications<-)
             :submit-txt "Add Medication")
     ])
  )

(defn show-error [msg] 
  (layout
    [:div
     [:h2 "An error happened!"]
     [:div msg] ]))
