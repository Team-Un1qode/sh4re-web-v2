import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as S from "./style";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import type { CodeType } from "../../types/code/CodeType";

export const codes: CodeType[] = [
  {
    id: 1,
    title: "Python 기초 예제",
    student: "1217채근영(chaeyn)",
    code: `def hello_world():
    print("Hello, World!")
    return "안녕하세요"

name = "채근영"
print(f"이름: {name}")`,
  },
  {
    id: 2,
    title: "리스트 컴프리헨션",
    student: "1217채근영(chaeyn)",
    code: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_squares = [x**2 for x in numbers if x % 2 == 0]
print(f"짝수의 제곱: {even_squares}")

# 중첩 리스트 컴프리헨션
matrix = [[i*j for j in range(1, 4)] for i in range(1, 4)]
print(f"구구단 표: {matrix}")`,
  },
  {
    id: 3,
    title: "딕셔너리 활용",
    student: "1217채근영(chaeyn)",
    code: `student_info = {
    "이름": "채근영",
    "학번": "1217",
    "성적": {"수학": 95, "영어": 88, "과학": 92}
}

for subject, score in student_info["성적"].items():
    print(f"{subject}: {score}점")

average = sum(student_info["성적"].values()) / len(student_info["성적"])
print(f"평균: {average:.1f}점")`,
  },
  {
    id: 4,
    title: "클래스와 상속",
    student: "1217채근영(chaeyn)",
    code: `class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return f"{self.name}이(가) 멍멍!"

class Cat(Animal):
    def speak(self):
        return f"{self.name}이(가) 야옹!"

dog = Dog("바둑이")
cat = Cat("나비")
print(dog.speak())
print(cat.speak())`,
  },
  {
    id: 5,
    title: "파일 입출력",
    student: "1217채근영(chaeyn)",
    code: `# 파일 쓰기
data = ["사과", "바나나", "오렌지"]
with open("fruits.txt", "w", encoding="utf-8") as f:
    for fruit in data:
        f.write(f"{fruit}\\n")

# 파일 읽기
with open("fruits.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print("파일 내용:")
    print(content)`,
  },
  {
    id: 6,
    title: "예외 처리",
    student: "1217채근영(chaeyn)",
    code: `def divide_numbers(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        print("0으로 나눌 수 없습니다!")
        return None
    except TypeError:
        print("숫자만 입력해주세요!")
        return None
    finally:
        print("계산 완료")

print(divide_numbers(10, 2))
print(divide_numbers(10, 0))`,
  },
  {
    id: 7,
    title: "데코레이터 패턴",
    student: "1217채근영(chaeyn)",
    code: `def logger(func):
    def wrapper(*args, **kwargs):
        print(f"함수 {func.__name__} 시작")
        result = func(*args, **kwargs)
        print(f"함수 {func.__name__} 종료")
        return result
    return wrapper

@logger
def calculate_factorial(n):
    if n <= 1:
        return 1
    return n * calculate_factorial(n-1)

result = calculate_factorial(5)
print(f"5! = {result}")`,
  },
  {
    id: 8,
    title: "람다와 고차함수",
    student: "1217채근영(chaeyn)",
    code: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# map, filter, reduce 활용
squared = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))

from functools import reduce
total = reduce(lambda x, y: x + y, numbers)

print(f"제곱: {squared}")
print(f"짝수: {evens}")
print(f"합계: {total}")`,
  },
  {
    id: 9,
    title: "제너레이터",
    student: "1217채근영(chaeyn)",
    code: `def fibonacci_generator(n):
    a, b = 0, 1
    count = 0
    while count < n:
        yield a
        a, b = b, a + b
        count += 1

# 제너레이터 사용
fib_gen = fibonacci_generator(10)
fib_list = list(fib_gen)
print(f"피보나치 수열: {fib_list}")

# 제너레이터 표현식
squares_gen = (x**2 for x in range(1, 6))
print(f"제곱수: {list(squares_gen)}")`,
  },
  {
    id: 10,
    title: "정규표현식",
    student: "1217채근영(chaeyn)",
    code: `import re

text = "이메일: chaeyn@example.com, 전화번호: 010-1234-5678"

# 이메일 패턴 찾기
email_pattern = r'\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b'
emails = re.findall(email_pattern, text)

# 전화번호 패턴 찾기
phone_pattern = r'\\d{3}-\\d{4}-\\d{4}'
phones = re.findall(phone_pattern, text)

print(f"이메일: {emails}")
print(f"전화번호: {phones}")`,
  },
  {
    id: 11,
    title: "데이터 구조 활용",
    student: "1217채근영(chaeyn)",
    code: `from collections import Counter, defaultdict, deque

# Counter 사용
text = "hello world"
char_count = Counter(text)
print(f"문자 빈도: {char_count}")

# defaultdict 사용
grades = defaultdict(list)
grades['수학'].append(95)
grades['영어'].append(88)
print(f"성적: {dict(grades)}")

# deque 사용
queue = deque([1, 2, 3])
queue.appendleft(0)
queue.append(4)
print(f"큐: {list(queue)}")`,
  },
  {
    id: 12,
    title: "날짜와 시간 처리",
    student: "1217채근영(chaeyn)",
    code: `from datetime import datetime, timedelta
import time

# 현재 시간
now = datetime.now()
print(f"현재 시간: {now.strftime('%Y-%m-%d %H:%M:%S')}")

# 시간 계산
tomorrow = now + timedelta(days=1)
print(f"내일: {tomorrow.strftime('%Y-%m-%d')}")

# 실행 시간 측정
start_time = time.time()
time.sleep(0.1)  # 0.1초 대기
end_time = time.time()
print(f"실행 시간: {end_time - start_time:.4f}초")`,
  },
  {
    id: 13,
    title: "JSON 데이터 처리",
    student: "1217채근영(chaeyn)",
    code: `import json

# 딕셔너리를 JSON으로 변환
student_data = {
    "name": "채근영",
    "student_id": "1217",
    "subjects": ["수학", "영어", "과학"],
    "grades": {"수학": 95, "영어": 88, "과학": 92}
}

# JSON 문자열로 변환
json_string = json.dumps(student_data, ensure_ascii=False, indent=2)
print("JSON 데이터:")
print(json_string)

# JSON 문자열을 딕셔너리로 변환
parsed_data = json.loads(json_string)
print(f"\\n파싱된 이름: {parsed_data['name']}")`,
  },
  {
    id: 14,
    title: "웹 크롤링 기초",
    student: "1217채근영(chaeyn)",
    code: `import requests
from bs4 import BeautifulSoup

def get_weather_info():
    try:
        # 가상의 날씨 API 호출 예제
        url = "https://api.example.com/weather"
        headers = {"User-Agent": "Mozilla/5.0"}
        
        # 실제로는 API 키가 필요할 수 있음
        # response = requests.get(url, headers=headers)
        
        # 예시 데이터
        weather_data = {
            "temperature": "22°C",
            "humidity": "65%",
            "condition": "맑음"
        }
        
        return weather_data
        
    except Exception as e:
        print(f"오류 발생: {e}")
        return None

weather = get_weather_info()
if weather:
    print(f"온도: {weather['temperature']}")
    print(f"습도: {weather['humidity']}")
    print(f"날씨: {weather['condition']}")`,
  },
];
const CodeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const code = codes.find((c) => c.id === Number(id));
  const codeRef = useRef<HTMLElement>(null); // 나중에 확인하기
  useEffect(() => {
    if (code) {
      hljs.highlightAll();
    }
  }, [code]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!code) {
      navigate(`/code`, { replace: true });
    }
  }, [code, navigate]);

  useEffect(() => {
    if (code && codeRef.current) {
      // 나중에 확인하기
      codeRef.current.removeAttribute("data-highlighted");
      codeRef.current.textContent = code.code;
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  if (!code) return null;
  return (
    <S.Container>
      <S.CodeContainer>
        <S.CodePre>
          <S.CodeText ref={codeRef} className='language-python' />
        </S.CodePre>
      </S.CodeContainer>
      <S.InfoContainer>
        <S.InfoTopBar>
          <S.CodeTitle>{code.title}</S.CodeTitle>
          <S.StudentInfo>{code.student}</S.StudentInfo>
        </S.InfoTopBar>
      </S.InfoContainer>
    </S.Container>
  );
};
export default CodeDetail;
