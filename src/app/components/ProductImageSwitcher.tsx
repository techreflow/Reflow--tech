'use client';
import Image from 'next/image';

const ProductImageSwitcher = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-blue-50 rounded-2xl" style={{ minHeight: '400px' }}>
      <Image 
        src="/producsts/alpha2.jpeg" 
        alt="ALPHA X Product" 
        width={200} 
        height={200} 
        className="object-contain"
        style={{ width: "auto", height: "auto" }}
        priority
      />
    </div>
  );
};
export default ProductImageSwitcher;
