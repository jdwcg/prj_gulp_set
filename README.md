# gulp_set  

이 프로젝트의 종속성을 로컬에 설치하기 위해 다음과 같은 npm 명령어를 사용할 수 있습니다:  

npm install: 이 명령어는 package.json 파일에서 정의된 종속성을 설치합니다. 이 명령어를 실행하기 전에 프로젝트 폴더로 이동한 후 실행해야 합니다. 실행하면 node_modules 폴더가 생성되고 해당 폴더 안에 종속성 패키지가 설치됩니다.

그리고  

npm install -g gulp-cli  

npm install gulp browser-sync@2.29.3 gulp-file-include@2.3.0 gulp-sass@5.1.0 --save-dev: 이 명령어는 개발 종속성(devDependencies)으로 gulp, browser-sync@2.29.3, gulp-file-include@2.3.0, gulp-sass@5.1.0 패키지를 설치합니다. --save-dev 플래그는 package.json 파일의 devDependencies 섹션에 종속성을 추가합니다.

npm install gulp-uglify@3.0.2 sass@1.63.6: 이 명령어는 일반 종속성(dependencies)으로 gulp-uglify@3.0.2와 sass@1.63.6 패키지를 설치합니다. package.json 파일의 dependencies 섹션에 종속성이 추가됩니다.

위의 명령어를 순서대로 실행하면 종속성이 프로젝트에 설치됩니다. --save-dev나 --save 플래그를 사용하면 해당 종속성이 package.json 파일에 자동으로 추가되므로, 다른 환경에서 프로젝트를 복원하거나 공유할 때 종속성을 쉽게 설치할 수 있습니다.

// 에러뜨면 파워셸에서 설정바꿔야함----------------------start  

파워셸에서 관리자로 실행  
Get-ExecutionPolicy로 실행해서 Restricted 출력되면 Set-ExecutionPolicy RemoteSigned 로 변경함.  
다시  Get-ExecutionPolicy로 실행하면 RemoteSigned로 출력되면 성공  
이하 실제 세팅 화면  
#######################start  
PS C:\WINDOWS\system32> Get-ExecutionPolicy  
Restricted  
PS C:\WINDOWS\system32> Set-ExecutionPolicy RemoteSigned  

실행 규칙 변경  
실행 정책은 신뢰하지 않는 스크립트로부터 사용자를 보호합니다. 실행 정책을 변경하면 about_Execution_Policies 도움말  
항목(https://go.microsoft.com/fwlink/?LinkID=135170)에 설명된 보안 위험에 노출될 수 있습니다. 실행 정책을  
변경하시겠습니까?  
[Y] 예(Y)  [A] 모두 예(A)  [N] 아니요(N)  [L] 모두 아니요(L)  [S] 일시 중단(S)  [?] 도움말 (기본값은 "N"): y  
PS C:\WINDOWS\system32>  
PS C:\WINDOWS\system32>  
PS C:\WINDOWS\system32>  
PS C:\WINDOWS\system32> Get-ExecutionPolicy  
RemoteSigned  
PS C:\WINDOWS\system32>  
#######################end  
// 에러뜨면 파워셸에서 설정바꿔야함--------------------------end
