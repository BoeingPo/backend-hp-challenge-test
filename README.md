
# Setup backend web

1. Clone Repo
```$ git clone https://github.com/BoeingPo/backend-hp-challenge-test.git```

2. Download env.txt file on Googledrive
https://drive.google.com/drive/folders/13DeqO1hU9X_5dD3Wi4NozJ89w1Ws4lWV?usp=sharing

3. Place env file
```$ nano .env (linux)```
- copy info inside env.txt file then place onto .env file and put it at root level of directory

4. Instance Database
```$ docker-compose up -d``` 
; noted : make sure that port 5777 and 5757 are available

5. Setup Backend
```$ ./script/init_server.sh```

6. Start Backend Server
```$ ./script/init```
