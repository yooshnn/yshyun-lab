type Data = {
  uid: number;
  title: string;
  organization: string;
  ongoing: number;
  period: string;
  information: string;
  article: { title: string; url: string }[];
};

export const data: { data: Data[] } = {
  data: [
    {
      uid: 1,
      title: '대학중점연구소지원사업',
      organization: '교육부',
      ongoing: 1,
      period: '2024.07 - 2027.12',
      information:
        '수학 기반 인공지능 연구를 중심으로 기초 수학 이론과 AI 모델의 융합을 연구하며, 고급 수리 해석 기법을 활용한 AI 알고리즘의 성능 개선을 목표로 합니다.',
      article: [
        {
          title: '인하대-㈜엠티오메가, 산학협력 업무협약 체결',
          url: 'https://inha.ac.kr/',
        },
      ],
    },
    // {
    //   uid: 2,
    //   title: '기초연구실지원사업 (BRL)',
    //   organization: '한국연구재단',
    //   ongoing: 1,
    //   period: '2023.03 - 2026',
    //   information:
    //     '고차원 데이터의 위상적 특성을 활용한 머신러닝 모델의 해석 가능성 향상 및 수학적 모델의 안정성 분석을 수행합니다.',
    //   article: [
    //     {
    //       title: '위상수학 기반 머신러닝 해석 가능성 연구 개시',
    //       url: 'https://nrf.re.kr/',
    //     },
    //     {
    //       title: '수학과 AI의 융합: 고차원 데이터 해석 연구 본격화',
    //       url: 'https://news.example.com/article/brl-research',
    //     },
    //   ],
    // },
    // {
    //   uid: 3,
    //   title: '산업 수학 기반 AI 모델 최적화 연구',
    //   organization: '딥 팩토리',
    //   ongoing: 0,
    //   period: '2020.05 - 2023.04',
    //   information:
    //     '산업 현장에서 발생하는 대규모 복합 데이터를 수학적 최적화 기법을 통해 분석하고, 효율적인 AI 모델을 개발하는 것을 목표로 했습니다.',
    //   article: [],
    // },
    // {
    //   uid: 4,
    //   title: '수리과학을 활용한 의료 데이터 해석 연구',
    //   organization: '보건복지부',
    //   ongoing: 1,
    //   period: '2022.01 - 2025.12',
    //   information:
    //     '위상 데이터 분석(TDA) 및 확률 모델을 활용해 의료 영상 및 임상 데이터에서 새로운 패턴을 발견하고, 진단 보조 시스템을 개발합니다.',
    //   article: [
    //     {
    //       title: '의료 AI 혁신을 위한 수리 모델 도입',
    //       url: 'https://mohw.go.kr/',
    //     },
    //   ],
    // },
    // {
    //   uid: 5,
    //   title: 'AI 기반 정밀 수학 모델 연구',
    //   organization: '넥스리틱스',
    //   ongoing: 0,
    //   period: '2019.09 - 2022.08',
    //   information:
    //     '수학적 모델링을 통한 기계 학습 모델의 성능 개선 및 복잡한 물리 시스템의 시뮬레이션을 수행했습니다.',
    //   article: [],
    // },
  ],
};
