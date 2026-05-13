import { ChevronLeft, Download, MessageCircle, Factory, Cog, Zap, Shield, Droplets, Cpu, Wind, Wrench, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import img1 from '../imports/image.png';
import img2 from '../imports/image-1.png';
import img3 from '../imports/image-2.png';
import img4 from '../imports/image-3.png';
import img5 from '../imports/image-4.png';
import img6 from '../imports/image-5.png';
import img7 from '../imports/image-6.png';
import img8 from '../imports/image-7.png';

import brandLogo1 from '../imports/brand-logo1.png';
import brandLogo2 from '../imports/brand-logo-2.png';
import brandLogo3 from '../imports/brand-logo-3.jpg';
import brandLogo4 from '../imports/brand-logo4.png';
import brandLogo5 from '../imports/brand-logo-5.jpg';

export default function App() {
  return (
    <div className="min-h-screen bg-white" dir="rtl" style={{ fontFamily: "'Tajawal', sans-serif" }}>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={img1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              المحركات الكهربائية الصناعية
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              حلول هندسية متكاملة للمحركات الكهربائية الصناعية من كبرى الشركات العالمية. جودة ألمانية، دعم فني متخصص، وتوريد عالمي لجميع القطاعات الصناعية.
            </p>

            {/*<div className="flex gap-4 mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-all hover:shadow-lg">
                <Download className="w-5 h-5" />
                تحميل الكتالوج
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-all hover:shadow-lg">
                <MessageCircle className="w-5 h-5" />
                تواصل واتساب
              </button>
            </div>*/}

          </div>
        </div>
      </section>

      {/* Motor Types Section - Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">أنواع المحركات الكهربائية</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              مجموعة شاملة من المحركات الصناعية لتلبية احتياجات مختلف القطاعات والتطبيقات الهندسية. نوفر حلولاً متكاملة من كبرى الشركات العالمية مع الدعم الفني الكامل.
            </p>
          </div>
        </div>
      </section>

      {/* AC Motors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
                النوع الأكثر شيوعاً في الصناعة
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">محركات التيار المتردد (AC Motors)</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                محركات التيار المتردد هي الخيار الأمثل للتطبيقات الصناعية الثقيلة والمتوسطة. تتميز بموثوقيتها العالية، تكلفة صيانة منخفضة، وكفاءة طاقية ممتازة تصل إلى IE4 و IE5 حسب المعايير الدولية.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                نوفر محركات AC بجميع الأحجام من 0.12 كيلووات حتى 500 كيلووات وأكثر، بجهود كهربائية متعددة تشمل 220V، 380V، 400V، و690V. جميع المحركات معتمدة من IEC ومتوافقة مع المعايير الأوروبية والأمريكية.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-600 mb-6">
                <h4 className="font-bold text-slate-900 mb-3">التطبيقات الرئيسية:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>المضخات الصناعية ومحطات المياه</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>أنظمة التهوية والتكييف</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>الضواغط والكومبريسرات</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>خطوط الإنتاج والسيور الناقلة</span>
                  </li>
                </ul>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all">
                استعرض كتالوج محركات AC
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={img2} alt="محركات AC" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Brands and Catalog for AC Motors */}
          <div className="mt-12">
            <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">العلامات التجارية المتخصصة</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { logo: brandLogo1, name: 'Siemens' },
                { logo: brandLogo2, name: 'ABB' },
                { logo: brandLogo3, name: 'WEG' },
                { logo: brandLogo4, name: 'TECO' },
              ].map((b, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-all"
                >
                  <img src={b.logo} alt={b.name} className="h-10 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DC Motors Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={img3} alt="محركات DC" className="w-full h-auto" />
              </div>
            </div>
            <div>
              <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
                التحكم الدقيق في السرعة
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">محركات التيار المستمر (DC Motors)</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                محركات DC توفر تحكماً دقيقاً وسلساً في السرعة والعزم، مما يجعلها الخيار المثالي للتطبيقات التي تتطلب تحكم متغير في السرعة أو عزم بدء تشغيل عالي.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                نوفر محركات DC بنوعيها: محركات بفرش كربونية (Brushed) للتطبيقات التقليدية، ومحركات بدون فرش (Brushless BLDC) للتطبيقات الحديثة عالية الأداء والكفاءة. متوفرة بجهود من 12V حتى 220V DC.
              </p>


              <div className="bg-purple-50 p-6 rounded-lg border-r-4 border-purple-600 mb-6">
                <h4 className="font-bold text-slate-900 mb-3">التطبيقات الرئيسية:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>آلات CNC والماكينات الدقيقة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>الروبوتات الصناعية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>المصاعد والرافعات</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>أنظمة الطاقة الشمسية</span>
                  </li>
                </ul>
              </div>

              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition-all">
                استعرض كتالوج محركات DC
              </button>
            </div>
          </div>

          {/* Brands and Catalog for DC Motors */}
          <div className="mt-12">
            <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">العلامات التجارية المتخصصة</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { logo: brandLogo2, name: 'ABB' },
                { logo: brandLogo1, name: 'Siemens' },
                { logo: brandLogo5, name: 'Lenze' },
                { logo: brandLogo3, name: 'Baldor' },
              ].map((b, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-all"
                >
                  <img src={b.logo} alt={b.name} className="h-10 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brake Motors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
                السلامة والأمان
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">محركات بنظام الفرامل (Brake Motors)</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                محركات مجهزة بأنظمة فرامل كهرومغناطيسية مدمجة توفر إيقافاً سريعاً وآمناً للحمل. تستخدم في التطبيقات التي تتطلب توقف دقيق أو تثبيت الحمل في وضع معين عند انقطاع التيار الكهربائي.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                الفرامل الكهرومغناطيسية تعمل تلقائياً عند انقطاع الكهرباء، مما يضمن سلامة العاملين والمعدات. متوفرة بأحجام وعزوم فرامل مختلفة لتناسب جميع التطبيقات من الرافعات حتى الونشات الثقيلة.
              </p>


              <div className="bg-red-50 p-6 rounded-lg border-r-4 border-red-600 mb-6">
                <h4 className="font-bold text-slate-900 mb-3">التطبيقات الرئيسية:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>الونشات والرافعات الصناعية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>أنظمة المصاعد والسلالم المتحركة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>آلات الطباعة والتعبئة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>معدات المسارح والستائر الكهربائية</span>
                  </li>
                </ul>
              </div>

              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg transition-all">
                استعرض كتالوج محركات الفرامل
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={img4} alt="محركات بنظام الفرامل" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Brands and Catalog for Brake Motors */}
          <div className="mt-12">
            <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">العلامات التجارية المتخصصة</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { logo: brandLogo4, name: 'SEW' },
                { logo: brandLogo5, name: 'Bonfiglioli' },
                { logo: brandLogo3, name: 'Nord' },
                { logo: brandLogo2, name: 'Motovario' },
              ].map((b, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-all"
                >
                  <img src={b.logo} alt={b.name} className="h-10 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explosion Proof Motors Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={img5} alt="محركات مضادة للانفجار" className="w-full h-auto" />
              </div>
            </div>
            <div>
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
                معتمدة ATEX & IECEx
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">المحركات المضادة للانفجار (Ex Motors)</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                محركات مصممة خصيصاً للعمل في البيئات الخطرة القابلة للانفجار. مصنعة وفق أعلى معايير السلامة الدولية ATEX و IECEx، ومعتمدة للاستخدام في المناطق الخطرة Zone 1 و Zone 2.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                التصميم الخاص يمنع أي شرارة أو حرارة زائدة قد تسبب اشتعال الغازات أو الأبخرة القابلة للاشتعال. متوفرة بجميع فئات الحماية Ex d، Ex e، Ex n حسب التطبيق والبيئة.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg border-r-4 border-orange-600 mb-6">
                <h4 className="font-bold text-slate-900 mb-3">التطبيقات الرئيسية:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>صناعة البترول والغاز</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>المصافي والمنشآت الكيميائية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>صناعة الطلاء والدهانات</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>مناجم الفحم والمعادن</span>
                  </li>
                </ul>
              </div>

              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg transition-all">
                استعرض كتالوج المحركات المضادة للانفجار
              </button>
            </div>
          </div>

          {/* Brands and Catalog for Explosion Proof Motors */}
          <div className="mt-12">
            <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">العلامات التجارية المتخصصة</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { logo: brandLogo3, name: 'WEG' },
                { logo: brandLogo2, name: 'ABB' },
                { logo: brandLogo1, name: 'Siemens' },
                { logo: brandLogo4, name: 'TECO' },
              ].map((b, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-all"
                >
                  <img src={b.logo} alt={b.name} className="h-10 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stainless Steel Motors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full mb-4">
                مقاومة قصوى للتآكل
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">محركات الستانلس ستيل (Stainless Steel Motors)</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                محركات مصنوعة بالكامل من الفولاذ المقاوم للصدأ (Stainless Steel 304/316) للعمل في البيئات القاسية والمسببة للتآكل. مثالية لصناعات الأغذية، الأدوية، والمنشآت البحرية.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                تتحمل هذه المحركات الغسيل المكثف بالماء والبخار، المواد الكيميائية، والبيئات المالحة. متوفرة بدرجات حماية عالية IP66 و IP69K مع إمكانية التنظيف بضغط الماء العالي.
              </p>

              <div className="bg-cyan-50 p-6 rounded-lg border-r-4 border-cyan-600 mb-6">
                <h4 className="font-bold text-slate-900 mb-3">التطبيقات الرئيسية:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>صناعة الأغذية والمشروبات</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>المصانع الدوائية والطبية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>محطات تحلية المياه</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>المنشآت البحرية والسفن</span>
                  </li>
                </ul>
              </div>

              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg transition-all">
                استعرض كتالوج محركات الستانلس ستيل
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={img6} alt="محركات ستانلس ستيل" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Brands and Catalog for Stainless Steel Motors */}
          <div className="mt-12">
            <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">العلامات التجارية المتخصصة</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { logo: brandLogo3, name: 'Nord' },
                { logo: brandLogo4, name: 'SEW' },
                { logo: brandLogo5, name: 'Bonfiglioli' },
                { logo: brandLogo2, name: 'Rossi' },
              ].map((b, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-all"
                >
                  <img src={b.logo} alt={b.name} className="h-10 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gear Motors Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={img7} alt="محركات مع علبة تروس" className="w-full h-auto" />
              </div>
            </div>
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
                عزم عالي - سرعة منخفضة
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">المحركات مع علب التروس (Gear Motors)</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                محركات كهربائية مدمجة مع صناديق تروس (Gearbox) لتوفير عزم دوران عالي بسرعات منخفضة. الحل المثالي عندما تحتاج قوة دفع كبيرة مع سرعة محكومة.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                نوفر جميع أنواع علب التروس: Helical (حلزونية)، Worm (دودية)، Bevel (مخروطية)، و Planetary (كوكبية). نسب تخفيض من 1:5 حتى 1:1000 حسب التطبيق. من العلامات العالمية مثل SEW، Bonfiglioli، و Nord.
              </p>

              <div className="bg-emerald-50 p-6 rounded-lg border-r-4 border-emerald-600 mb-6">
                <h4 className="font-bold text-slate-900 mb-3">التطبيقات الرئيسية:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>السيور الناقلة والكونفيير</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>الخلاطات والمحركات الصناعية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>أبواب المصانع والجراجات</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>معدات الرفع والنقل</span>
                  </li>
                </ul>
              </div>

              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg transition-all">
                استعرض كتالوج المحركات مع علب التروس
              </button>
            </div>
          </div>

          {/* Brands and Catalog for Gear Motors */}
          <div className="mt-12">
            <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">العلامات التجارية المتخصصة</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { logo: brandLogo4, name: 'SEW' },
                { logo: brandLogo5, name: 'Bonfiglioli' },
                { logo: brandLogo3, name: 'Nord' },
                { logo: brandLogo2, name: 'Motovario' },
              ].map((b, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-all"
                >
                  <img src={b.logo} alt={b.name} className="h-10 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spindle Motors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-4">
                سرعة فائقة - دقة عالية
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">محركات السبندل (Spindle Motors)</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                محركات عالية السرعة مصممة خصيصاً لتطبيقات القطع والتشغيل الدقيق. تستخدم في آلات CNC، المخارط، وماكينات الطحن لتوفير دوران سلس ودقيق بسرعات تصل إلى 60,000 RPM.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                تتميز بتحمل خاص عالي الدقة، تبريد مائي أو هوائي، وتصميم متوازن ديناميكياً لتقليل الاهتزاز. متوفرة بأنظمة تحكم متقدمة للتحكم في السرعة والعزم بدقة عالية.
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg border-r-4 border-indigo-600 mb-6">
                <h4 className="font-bold text-slate-900 mb-3">التطبيقات الرئيسية:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">•</span>
                    <span>آلات CNC ومراكز التشغيل</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">•</span>
                    <span>ماكينات الطحن والتفريز</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">•</span>
                    <span>ماكينات القطع بالليزر</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">•</span>
                    <span>ماكينات الحفر الدقيق</span>
                  </li>
                </ul>
              </div>

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg transition-all">
                استعرض كتالوج محركات السبندل
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={img8} alt="محركات السبندل" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Brands and Catalog for Spindle Motors */}
          <div className="mt-12">
            <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">العلامات التجارية المتخصصة</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { logo: brandLogo1, name: 'Siemens' },
                { logo: brandLogo2, name: 'ABB' },
                { logo: brandLogo5, name: 'Lenze' },
                { logo: brandLogo3, name: 'Fanuc' },
              ].map((b, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-all"
                >
                  <img src={b.logo} alt={b.name} className="h-10 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturer Brands Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">الشركات المصنعة العالمية</h2>
            <p className="text-lg text-gray-600">نوفر محركات من أفضل العلامات التجارية الصناعية في العالم</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { logo: brandLogo1, name: 'Siemens' },
              { logo: brandLogo2, name: 'ABB' },
              { logo: brandLogo3, name: 'WEG' },
              { logo: brandLogo4, name: 'TECO' },
              { logo: brandLogo5, name: 'Bonfiglioli' },
              { logo: brandLogo3, name: 'Nord' },
              { logo: brandLogo2, name: 'Motovario' },
              { logo: brandLogo4, name: 'SEW' },
              { logo: brandLogo5, name: 'Lenze' },
            ].map((b, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-8 flex items-center justify-center hover:shadow-lg hover:border-blue-300 transition-all group h-32"
              >
                <img src={b.logo} alt={b.name} className="h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">الكتالوجات الفنية</h2>
            <p className="text-lg text-gray-300">احصل على الكتالوجات الفنية الكاملة لجميع المنتجات</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <Cog className="w-20 h-20 text-white/60 mx-auto mb-4" />
                  <p className="text-white/80">معاينة ثلاثية الأبعاد</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">كتالوج المحركات الصناعية 2026</h3>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Download className="w-5 h-5" />
                تحميل الكتالوج الرئيسي
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'محركات AC', pages: '32 صفحة' },
                { title: 'محركات DC', pages: '24 صفحة' },
                { title: 'محركات مضادة للانفجار', pages: '28 صفحة' },
                { title: 'علب التروس', pages: '40 صفحة' },
              ].map((cat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg mb-4 flex items-center justify-center">
                    <Download className="w-10 h-10 text-white/60" />
                  </div>
                  <h4 className="text-white font-bold mb-2">{cat.title}</h4>
                  <p className="text-sm text-gray-400">{cat.pages}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">المحركات الكهربائية الصناعية: دليل شامل</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              المحركات الكهربائية الصناعية هي العمود الفقري للإنتاج الصناعي الحديث. توفر شركة إمامك حلولاً متكاملة للمحركات الكهربائية من كبرى الشركات العالمية، مع التركيز على الجودة الألمانية والكفاءة الطاقية العالية.
            </p>

            <div className="bg-blue-50 border-r-4 border-blue-600 p-6 my-8 rounded-lg">
              <p className="text-gray-800 italic">
                "نوفر أكثر من 10,000 موديل من المحركات الكهربائية الصناعية بمواصفات عالمية، مع ضمان التوريد السريع والدعم الفني المتخصص."
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-12">أنواع المحركات الكهربائية</h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>محركات التيار المتردد (AC Motors): الأكثر شيوعاً في التطبيقات الصناعية</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>محركات التيار المستمر (DC Motors): للتحكم الدقيق في السرعة</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>المحركات المضادة للانفجار: معتمدة ATEX للبيئات الخطرة</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>محركات الفرامل: للتطبيقات التي تتطلب توقف سريع وآمن</span>
              </li>
            </ul>

            <details className="mb-6 bg-gray-50 rounded-lg">
              <summary className="cursor-pointer p-6 font-bold text-slate-900 hover:bg-gray-100 rounded-lg transition-colors">
                كيفية اختيار المحرك الكهربائي المناسب؟
              </summary>
              <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                يعتمد اختيار المحرك على عدة عوامل: القدرة المطلوبة، السرعة، نوع الحمل، بيئة التشغيل، ومتطلبات الكفاءة. فريقنا الهندسي يساعدك في اختيار الحل الأمثل.
              </div>
            </details>

            <details className="mb-6 bg-gray-50 rounded-lg">
              <summary className="cursor-pointer p-6 font-bold text-slate-900 hover:bg-gray-100 rounded-lg transition-colors">
                ما هي معايير الكفاءة الطاقية للمحركات؟
              </summary>
              <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                توفر المحركات الحديثة كفاءة IE3 و IE4 حسب معايير IEC، مما يقلل استهلاك الطاقة بنسبة تصل إلى 30% مقارنة بالمحركات التقليدية.
              </div>
            </details>

            <details className="mb-6 bg-gray-50 rounded-lg">
              <summary className="cursor-pointer p-6 font-bold text-slate-900 hover:bg-gray-100 rounded-lg transition-colors">
                هل توفرون خدمات الصيانة والإصلاح؟
              </summary>
              <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                نعم، نوفر خدمات صيانة شاملة، قطع غيار أصلية، وفريق فني متخصص لضمان استمرارية تشغيل محركاتكم بأعلى كفاءة.
              </div>
            </details>
          </article>
        </div>
      </section>


      {/* WhatsApp CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-700 to-green-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <MessageCircle className="w-20 h-20 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">تحتاج مساعدة في اختيار المحرك المناسب؟</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            فريقنا الهندسي المتخصص جاهز لمساعدتك في اختيار الحل الأمثل لتطبيقك الصناعي
          </p>

          <button className="bg-white text-green-700 px-10 py-5 rounded-lg hover:bg-green-50 transition-all text-xl font-bold inline-flex items-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105 transform">
            <MessageCircle className="w-6 h-6" />
            تواصل عبر واتساب
          </button>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-green-200">سنة خبرة</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-green-200">محرك متوفر</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-green-200">دعم فني</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
        </div>
      </footer>
    </div>
  );
}
