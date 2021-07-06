(declare-project 
      :name "tally"
      :description "A personal inventory system for supplies that are consumed on a patterned basis."
      :dependencies 
      [
      "https://github.com/yumaikas/praxis"
      "https://github.com/yumaikas/chrono"
      "https://github.com/swlkr/janet-html"
      "https://github.com/swlkr/osprey"
      "sqlite3"
       ]
      )


(declare-source :name "tally" :source "tally.janet")

