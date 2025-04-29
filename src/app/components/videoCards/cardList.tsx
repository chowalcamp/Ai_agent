import { ChevronRightIcon } from "lucide-react";
import Card from "./card";
import './cardList.css'  // CSS import 추가

export default function CardList() {
  return (
    <div className="card-list-wrapper">  {/* 외부 컨테이너 추가 */}
      <h2>Trending Now</h2>
      <div className="card-list-container">
      <div className="card-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="card-list-right-arrow">
        <ChevronRightIcon size={30} />
      </div>
      </div>
    </div>
  );
}