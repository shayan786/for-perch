```
bundle install
npm install

rake db:create
rake db:migrate
rake db:seed

foreman start -f Procfile.hot

localhost:5000
```