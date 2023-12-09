import './App.css';
import ImgBox from './component/ImgBox';

function App() {
    return (
        <div className="App">
            <ImgBox 
                price="799,900" 
                title="오사카 3,4일 #100%출발확정 #미식여행" 
                hash="#예약만 하면 100% 출발확정 #교토/고베/나라 등 근교 관광 #스키야키, 샤브샤브 등 미식여행" 
                url="https://image.hanatour.com/usr/cms/resize/400_0/2016/10/07/10000/28560e23-74c5-4d3f-81d4-8b01ea5b67ca.png"
                />
            <ImgBox 
                price="1,199,000" 
                title="홋카이도 4일 #온천호텔 #겨울여행추천 #핵심관광" 
                hash="#도야-노보리베츠, 삿포로 핵심관광 #온천호텔 및 시내호텔 숙박 #명물 게요리, 샤브샤브 등 특식" 
                url="https://image.hanatour.com/usr/cms/resize/400_0/2023/08/23/10000/81208acb-dffd-4e03-9c6b-af02125a1cdf.jpg"
                />
            <ImgBox 
                price="699,900" 
                title="대만 4,5,6일 야류/지우펀 #스펀천등날리기" 
                hash="#대만필수코스 핵심관광 #기암괴석 '야류 해상국립공원' #별빛보다 아름다운 '지우펀' " 
                url="https://image.hanatour.com/usr/cms/resize/400_0/2020/02/13/10000/375de2c3-070c-4c9f-9cc1-65a5d359486f.jpg"
                />
            <ImgBox   
                price="349,000" 
                title="코타키나발루 5일 #팔레스" 
                hash="#즐거운 물놀이, 아일랜드 투어 #색다른 밤, 선셋나이트 투어 #자유일정 1일" 
                url="https://image.hanatour.com/usr/cms/resize/400_0/2014/12/31/10000/b53a3a5c-4155-4832-9290-933c788fa095.jpg"
            />
          </div>
    );
}

export default App;
