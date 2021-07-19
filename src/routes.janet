(import route-helpers :as r)

(r/routes 
  home "/"
  conditions "/conditions"
  condition-by-id "/conditions/:id"
  condition-meds "/conditions/:id/medications"
  condition-notes "/conditions/:id/notes"

  api-v1-medications "/api/v1/medications"

  medications "/medications"
  medication-by-id "/medications/:id"
  medication-conditions "/medications/:id/conditions"

  notes "/notes"

  reports "/reports"
  appts-report "/reports/print-appointments"
  meds-report "/reports/print-medications"

  )
