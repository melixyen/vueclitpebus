<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      本系統衍生自
      <a href="http://melixyen.github.io/railtime/busp.html#/" target="_blank">公車運輸 QR CODE 雲端看板</a>，
      藉由客製化站牌提供社區、辦公大樓快速查詢鄰近站牌公車動態，在掌握時間之餘推播附近店家廣告給查詢者。

    </p>
    <h2>推廣流程</h2>
    <ol>
      <li>向里長、大樓管委會介紹產品功能</li>
      <li>在里佈告欄、巷口看板、大樓門口張貼附近公車站牌 QR CODE</li>
      <li>針對不會使用公車 App 或不想裝 App 的使用者介紹一次性掃碼查看公車動態用法</li>
      <li>曝光率達第一階段計劃後，向站牌附近的店家推薦於此平台登錄廣告</li>
      <li>針對搭公車族群可藉由掌握公車來車時間免於先到站牌等車。增加的閒置時間可藉由廣告吸引往附近店家消費</li>
      <li>由於廣告收看者保證為當下在該區域的消費者，廣告投放目標擊中率保證高</li>
      <li>之後藉於與商家合作，由商家提供廣告優惠，吸引消費者掃碼後持優惠訊息至店家消費而逆向增加掃碼客群</li>
      <li>進化為智慧社區資訊看板，掃碼可得知公車、捷運動態，附近商家優惠，里內資訊傳播，使里民出門便順手習慣掃碼</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
}
ol {
  text-align: left;
  display: inline-block;
}
li {
  margin: 0 10px;
  font-size: 24px;
  line-height: 30px;
}
a {
  color: #42b983;
}
</style>
