(import err)
(import ./server)
(import ./db)

(def usage """
  tally: A small web server for medication tracking.

  Commands:

  serve:   Runs a webserver on the HOST:PORT env vars
  migrate: Creates or updates a database.
  help:    Shows this message
  """)

(defn usage [args] 
  (print "This is a web-app for tracking medications and the conditions they treat"))
(defn show-help [& args] 
  (usage args))


# TODO: Other things.
(defn main [_ & args]
  (match args
    ["createdb"] (db/create ;(slice args 1))
    ["serve"] (server/serve ;(slice args 1))
    ["help"] (show-help)
    _ (error "Did not recognize ")))
