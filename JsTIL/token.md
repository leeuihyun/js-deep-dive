# access token / refresh token 구별

JWT(Json Web Token) 인증 방식에서 실질적으로 인증 유무를 결정하는 것은 accessToken이다.  
accessToken은 시간이 지나면 만료가 되는 구조인데,  
refreshToken을 이용해 만료된 accessToken을 새로 발급받을 수 있다.  
