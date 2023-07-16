# gulp_set  

사스걸프 설치 시작  
npm install --save-dev gulp gulp-sass browser-sync  

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
