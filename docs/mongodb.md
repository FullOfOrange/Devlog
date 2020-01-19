# MongoDB

mongoDB 는 scheme-less 하다. 이말은 특정 필드나 값에 대한 고정적인 데이터 타입이 존재하지 않아서 자유도가 높다는 뜻이다.

### 데이터 구조


### 접속
```sh
## 접속 인증
$ mongo -u username -p password --authenticationDatabase admin

## 내부에서 인증
$ mongo

$ db.auth('username','password')
```