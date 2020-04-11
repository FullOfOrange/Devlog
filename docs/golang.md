# Go

코딩을 하면서 유용하거나 쓸만한 내용들을 첨부해놓음.

### Log

- [log.Fatal](https://stackoverflow.com/questions/33885235/should-a-go-package-ever-use-log-fatal-and-when)

  이 함수는 init 이나 main 에서 사용해야한다. 이 함수는 os.Exit 를 호출하며, 앵간해서는 사용하지 않는 방향을 유지해야함.
  대신 log.Panic 을 통해서 panic 을 유발해야한다. 그래야 go 에서 이것을 핸들링 가능함.

  Fatal 을 사용해야 하는 경우는
  1. init Function 에서 사용해서 초기화가 실패할 경우
  2. 핸들링이 불가능하여 프로그램이 종료되어야 하는 에러의 경우
  3. 프로세스가 돌다가 원복할 수 없는 상태에서의 에러
