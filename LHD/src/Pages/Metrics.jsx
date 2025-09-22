import React, { useState, useEffect, useRef } from "react";

const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CountUp = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      const timer = setTimeout(() => requestAnimationFrame(animate), 300);
      return () => clearTimeout(timer);
    }, [isVisible, end, duration]);

    return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
  };

  const metrics = [
    {
      value: 28,
      suffix: "",
      label: "Years in Operation",
      description: "Established pharmaceutical leader"
    },
    {
      value: 2.4,
      suffix: "B",
      prefix: "$",
      label: "Annual Revenue",
      description: "Global market presence"
    },
    {
      value: 180,
      suffix: "+",
      label: "Markets Served",
      description: "Worldwide distribution network"
    },
    {
      value: 47,
      suffix: "%",
      label: "Market Share",
      description: "Leading therapeutic areas"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative mt-20 py-12 bg-white overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-slate-500 tracking-wide uppercase letter-spacing-wider">
              Performance Metrics
            </span>
            <div className="h-px bg-slate-200 mt-2"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Driving Healthcare Excellence
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our commitment to pharmaceutical innovation and patient care is reflected in our operational achievements and market leadership.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white p-12 text-center group hover:bg-slate-50 transition-colors duration-300"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 100}ms`,
                transitionDuration: '600ms',
                transitionProperty: 'transform, opacity'
              }}
            >
              {/* Metric Value */}
              <div className="mb-6">
                <div className="text-5xl md:text-6xl font-light text-slate-900 mb-2 tabular-nums">
                  <CountUp 
                    end={metric.value} 
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                  />
                </div>
              </div>

              {/* Metric Label */}
              <h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">
                {metric.label}
              </h3>
              
              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {metric.description}
              </p>

              {/* Subtle indicator line */}
              <div className="mt-8 mx-auto">
                <div 
                  className="h-px bg-blue-600 transition-all duration-500"
                  style={{
                    width: isVisible ? '24px' : '0px',
                    transitionDelay: `${index * 100 + 400}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-slate-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>FDA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>ISO 9001:2015</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>GMP Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;