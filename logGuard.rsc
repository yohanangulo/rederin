:local loglist [:toarray [/log find message~"ppp secret" and message~"added by"]]; \

:foreach i in=$loglist do={ \
  :local logMessage [/log get $i message]; \
  :local eventTime [/log get $i time]; \
  :local mkName [/system identity get name]; \

  :local retries 5; \

  :while ($retries > 0 ) do={ \
    :do { \
      tool fetch url="api" \
      output=user \
      http-method=post \
      http-data="{\"data\": \"$logMessage\", \"logTime\": \"$eventTime\", \"mkName\":\"$mkName\" }" \
      http-header-field="content-type: application/json"; \

      set retries 0; \
    } on-error={ \
      :put "hubo un error"; \
      :delay 15s; \
      set retries ($retries - 1); \
    } \
  } \

}
  

## remember set a delay time after each API call

### request example
tool fetch url="api" \
output=user \
http-method=post \
http-data="{\"data\": \"ppp secret <mkTest2> added by ejau15\"}" \
http-header-field="content-type: application/json"