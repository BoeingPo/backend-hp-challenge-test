====
Setup backend web
====
Clone Repo \n
$ git clone https://github.com/BoeingPo/backend-hp-challenge-test.git \n

Download env.txt file on Googledrive \n
https://drive.google.com/drive/folders/13DeqO1hU9X_5dD3Wi4NozJ89w1Ws4lWV?usp=sharing

Place env file \n
$ nano .env (linux)
- copy info inside env.txt file then place onto .env file and put it at root level of directory

Instance Database
$ docker-compose up -d 
; noted : make sure that port 5777 and 5757 are available

Setup Backend
$ ./script/init_server.sh

Start Backend Server
$ ./script/init
