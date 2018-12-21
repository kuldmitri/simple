#!/bin/bash

clear

# echo -e "@types:registry=https://registry.npmjs.org/\n@bct:registry=http://npmjs.dev.cgbc.rocks:4873/\n//npmjs.dev.cgbc.rocks:4873/:_authToken=\"gkiTk7oVlnmh9FQD7yT4UA==\"\ninit.author.name=den\ninit.author.email=test@test.co" > ~/.npmrc
# PATH=$PATH:/usr/local/sbin

function installServiceDependencies() {
    cd $1
    ./build.sh
    cd $2

	echo "===================== Dependencies for \"$1\" are installed successfully ===================== "
}

# Bash 3 has no supports the associative arrays...
# tg-listener missing
declare MICROSERVICES=(
	"frontend"
	"backend"
	"worker"
	)


# Start Microservices in own container
for index in "${MICROSERVICES[@]}"
do :
    installServiceDependencies $index $PWD
done


echo "End..."
