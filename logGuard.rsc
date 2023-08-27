:local loglist [:toarray [/log find message~"ppp secret" and message~"added by"]]; \

  :foreach i in=$loglist do={ \
    :local logMessage [/log get $i message]; \
    ## remember set a delay time after each API call

    put $logMessage; \
  }
  

  ### request example
tool fetch url="api" \
output=user \
http-method=post \
http-data="{\"data\": \"ppp secret <mkTest2> added by ejau15\"}" \
http-header-field="content-type: application/json"