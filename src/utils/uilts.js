import w3Utils from 'web3-utils'

export const fs = [
  x => (x ? w3Utils.keccak256(x + x).slice(2) : ''),
  x => (x ? atob(w3Utils.keccak256(x).slice(2)) : ''),
  x => (x ? w3Utils.keccak256(w3Utils.keccak256(x)).slice(2, 32) : ''),
]

export const ss = length => {
  let r = ''
  const cs =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-=+!@#$%^&*_<>ผปแอิืทมใฝฟหกดเ้่าสวงๆไำพะัีรนยบลๅ_ภถุึคตจข,ฐญฯณ๊ํธฑฎ๐.ซศษ๋็ฌโฏฆฬฒ?์ฺฮฉ'
  const csl = cs.length
  for (var i = 0; i < length; i++) {
    r += cs.charAt(Math.floor(Math.random() * csl))
  }
  return r
}
const whenChange = (base, mimic, setBase, setMimic) => {
  setBase(base)
  setMimic(
    (mimic + ss(Math.max(0, base.length - mimic.length))).slice(0, base.length),
  )
}
