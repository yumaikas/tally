(import janet-html :as html)
(use praxis)
(use markable)
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

(defn link-to-lead [lead] 
  [:a {:href (rt/view-lead<- (get lead :rowid))} "View"])

(defn home [leads &opt lead] 
  (layout 
    [:div
     [:h2 "Current leads"]
     (r/table Lead leads 
              :ord [ :name ]
              :computed 
              [:link 
               {:title "View"
                :fn |(link-to-lead $) }]) 
     [:br]
     [:h2 "Add new lead"]
     (r/form (or lead (s/empty-of Lead))
             :action "/leads/add"
             :submit-txt "Add new lead!")]))


(defn lead [lead activities] 
  (def item-link 
    {:title "View Activity"
     :fn |[:a {:href (rt/view-activity<- (or ($ :rowid) "NIL"))} "View"] })
  (def item-header
    {:title "Notes"
     :fn |[:div ($ :notes)]})
  
  (layout
    [:div
     [:h2 (lead :name)]
     [:div (markdown->html :description)]
     [:br]
     [:br]

     (r/table Activity activities
              :ord [ :link :title :tags :header ]
              :computed {:link item-link :header item-header })
    (r/form (as-> (s/empty-of Activity) it 
                  (put-in it [:vals :lead_id] (lead :rowid)))
            :action (rt/add-activity<- (lead :rowid))
            :submit-txt "Add Activity")]))

(defn activity [activity] 
  (layout 
    [:div
     [:h2 "Viewing Actvity"]
     [:br]
     [:h3 (get-in activity [:vals :title])]
     [:h4 (get-in activity [:vals :tags])]
     [:hr]
     [:div (markdown->html (get-in activity [:vals :content]))]
     [:hr]]))

(defn fix-activity [item lead-id] 
  (layout 
    [:div
     [:h2 "Please correct errors with this activity"]
     (r/form item
             :action (rt/add-activity lead-id)
             :submit-txt "Send message")]))

(defn show-error [msg] 
  (layout
    [:div
     [:h2 "An error happened!"]
     [:div msg] ]))
