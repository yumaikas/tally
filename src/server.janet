(use osprey)
(import ./views :as v)
(import ./routes :as rt) 
(import ./db)

(defn html-of [body] 
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body body})
(defn text-of [body] 
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body body})

(defn redirect-to [url]
  {:status 301
   :headers {"Location" url}})

(defn get-kv [args key]
  (get args (+ 1 (or (index-of key args) -1))))

# XXX: Remove
(os/setenv "DBFILE" "test.db")

(defn serve [& args] 
  (def db-file (or 
                 (get-kv args "--dbfile") 
                 (os/getenv "DBFILE") 
                 (error "Please use --dbfile or DBFILE env var to specify the sqlite db file!")))
  (pp ["DBFILE" db-file])
  (enable :static-files)
  (GET rt/home (html-of (v/home)))

  (GET rt/medications (html-of (v/medications (db/list-meds db-file))))

  (POST rt/medications 
        (match (db/add-med db-file params)
          [:ok] (redirect-to rt/medications)
          [:err wip-med] (html-of (v/medications (db/list-meds db-file) wip-med))))

  (GET rt/conditions (html-of (v/conditions (db/list-conditions db-file))))
  (POST rt/conditions 
        (match (db/add-condition db-file params)
          [:ok] (redirect-to rt/conditions)
          [:err wip-cond] (html-of (v/conditions (db/list-conditions db-file) wip-cond))))


  # temp
  (os/shell "start http://localhost:9005/")
  (server 9005))


