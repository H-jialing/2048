<template>
  <div>
    <header>
      <h1>2048</h1>
        <button class="new-game" onclick="init()">重新游戏</button>
        <p>score:<span>0</span></p>
    </header>
    <div class="grid-container">
      <div class="grid-cell" id="grid-0-0"></div>
      <div class="grid-cell" id="grid-0-1"></div>
      <div class="grid-cell" id="grid-0-2"></div>
      <div class="grid-cell" id="grid-0-3"></div>
      <div class="grid-cell" id="grid-1-0"></div>
      <div class="grid-cell" id="grid-1-1"></div>
      <div class="grid-cell" id="grid-1-2"></div>
      <div class="grid-cell" id="grid-1-3"></div>
      <div class="grid-cell" id="grid-2-0"></div>
      <div class="grid-cell" id="grid-2-1"></div>
      <div class="grid-cell" id="grid-2-2"></div>
      <div class="grid-cell" id="grid-2-3"></div>
      <div class="grid-cell" id="grid-3-0"></div>
      <div class="grid-cell" id="grid-3-1"></div>
      <div class="grid-cell" id="grid-3-2"></div>
      <div class="grid-cell" id="grid-3-3"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-weight: bold;
}
button {
  background-color: #F8A;
  color: #FFF;
  border-radius: 6px;
}
.grid-container {
  width: 460px;
  height: 460px;
  padding: 20px;
  margin: 50px auto;
  background-color: #F84;
  border-radius: 10px;
  position: relative;
}
.grid-cell {
  width: 100px;
  height: 100px;
  background-color: #7F1;
  border-radius:10px;
  position: absolute;
}
.grid-cell2 {
  color: #000;
  background-color: #199;
  width: 100px;
  height: 100px;
  border-radius:10px;
  position: absolute;
  font-size: 80px;
  text-align: center;
  line-height: 100px;
}
.grid-cell4{
  color: #000;
  background-color: #459;
  width: 100px;
  height: 100px;
  border-radius:10px;
  position: absolute;
  font-size: 80px;
  text-align: center;
  line-height: 100px;
}
.grid-cell8{
  color: #FFF;
  background-color: #46A;
  width: 100px;
  height: 100px;
  border-radius:10px;
  position: absolute;
  font-size: 80px;
  text-align: center;
  line-height: 100px;
}
.grid-cell16 {
  color: #FFF;
  background-color: #561;
  width: 100px;
  height: 100px;
  border-radius:10px;
  position: absolute;
  font-size: 80px;
  text-align: center;
  line-height: 100px;
}
.grid-cell32 {
  color: #FFF;
  background-color: #565;
  width: 100px;
  height: 100px;
  border-radius:10px;
  position: absolute;
  font-size: 80px;
  text-align: center;
  line-height: 100px;
}
.grid-cell64 {
  color: #FFF;
  background-color: #568;
  width: 100px;
  height: 100px;
  border-radius:10px;
  position: absolute;
  font-size: 80px;
  text-align: center;
  line-height: 100px;
}
.grid-cell128 {
  color: #FFF;
  background-color: #56A;
  width: 100px;
  height: 100px;
  border-radius:10px;
  position: absolute;
  font-size: 50px;
  text-align: center;
  line-height: 100px;
}
.grid-cell256 {
  color: #FFF;
  background-color: #56F;
  width: 100px;
  height: 100px;
  border-radius:10px;
  position: absolute;
  font-size: 50px;
  text-align: center;
  line-height: 100px;
}
.grid-cell512 {
  color: #FFF;
  background-color: #572;
  width: 100px;
  height: 100px;
  border-radius:10px;
  position: absolute;
  font-size: 50px;
  text-align: center;
  line-height: 100px;
}
.grid-cell1024 {
  color: #FFF;
  background-color: #578;
  width: 100px;
  height: 100px;
  border-radius:10px;
  position: absolute;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
}
.grid-cell1028 {
  color: #FFF;
  background-color: #57F;
  width: 100px;
  height: 100px;
  border-radius:10px;
  position: absolute;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
}
</style>