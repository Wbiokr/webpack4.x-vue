echo "Please input the name of theme"
set/p name=
echo "building the theme---%name%"

start cmd /k "npm run theme"