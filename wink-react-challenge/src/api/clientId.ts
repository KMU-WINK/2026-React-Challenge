// 로그인이 없으니 브라우저마다 UUID를 하나 만들어 두고 "나"를 구분하는 데 씀
export function getClientId(): string {
  let id = localStorage.getItem("clientId");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("clientId", id);
  }
  return id;
}
