(import route-helpers :as r)

(r/routes 
  home "/"
  condition "/conditions"
  show-condition "/conditions/:id"
  condition-meds "/conditions/:id/medications"
  condition-notes "/conditions/:id/notes"

  medication "/medications"
  show-medication "/medications/:id"
  show-medication "/medications/:id/conditions"

  notes "/notes"



  reports "/reports"
  appts-report "/reports/print-appointments"
  meds-report "/reports/print-medications"

  )
