:local loglist [:toarray [:log find time > ([/system clock get time] - 5m) message~"added by"]];

  :foreach i in=$loglist do={ 
    :local logMessage [/log get $i message];

    ## remember set a delay time after each API call
    put $logMessage;
  }