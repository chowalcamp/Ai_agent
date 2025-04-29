import Image from "next/image";

export default function Card() {
  return (
    <div className="card-wrapper">
      <div className="card-image">
        <Image
          src="/sampleCard1.png"
          alt="카드이미지"
          width={180}
          height={252}
        />
      </div>
    </div>
  );
}