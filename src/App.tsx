import React from "react";

    const App: React.FC = () => {
          return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-xl p-4 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-bold mb-2">自己紹介カード</h2>
              <div className="border-t mt-2 pt-2">
                <p className="p-2"><span className="font-bold">名前:</span> 横田宜弘</p>
                <p className="p-2"><span className="font-bold">ふりがな:</span> よこたのぶひろ</p>
                <p className="p-2"><span className="font-bold">学校:</span> 芝浦工業大学</p>
                <p className="p-2"><span className="font-bold">好きな食べ物:</span> いくら</p>
                <p className="p-2"><span className="font-bold">好きな趣味:</span> 車、ディズニー、オーケストラ</p>
                <div>aaa</div>
              </div>
            </div>
          </div>
  );
}

export default App;
