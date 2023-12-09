import './App.css';
import Card from './component/Card';

function App() {

  return (
    <div className="app">
     <Card 
     url='https://image.hanatour.com/usr/cms/resize/400_0/2016/10/07/10000/28560e23-74c5-4d3f-81d4-8b01ea5b67ca.png'
     name='오사카 3,4일 #100%출발확정 #미식여행'
     desc='#예약만 하면 100% 출발확정 #교토/고베/나라 등 근교 관광 #스키야키, 샤브샤브 등 미식여행'
     price={799900}></Card>
     <Card 
     url='https://image.hanatour.com/usr/cms/resize/400_0/2023/08/23/10000/81208acb-dffd-4e03-9c6b-af02125a1cdf.jpg'
     name='홋카이도 4일 #가성비추천 #오타루숙박 #핵심관광 #온천호텔'
     desc='#도야-노보리베츠,삿포로 핵심관광 #온천호텔 및 시내호텔 숙박 #명물 게요리, 샤브샤브 등 특식'
     price={1199000}></Card>
     <Card 
     url='https://image.hanatour.com/usr/cms/resize/400_0/2020/02/13/10000/375de2c3-070c-4c9f-9cc1-65a5d359486f.jpg'
     name='대만 4,5일 #초특가 #가성비 #비교불가'
     desc='#대만필수코스 핵심관광 #기암괴석 "야류 해상국립공원" #별빛보다 아름다운 "지우펀"'
     price={699900}></Card>
    <Card 
     url='https://image.hanatour.com/usr/cms/resize/400_0/2014/12/31/10000/b53a3a5c-4155-4832-9290-933c788fa095.jpg'
     name='코타키나발루 5~6일 #준특급리조트 #가격이혜택 #가성비'
     desc='#즐거운 물놀이, 아일랜드 투어 #색다른 밤,선셋나이트 투어 #자유일정 1일'
     price={349000}></Card>
    </div>
  );
}

export default App;
