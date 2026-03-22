# oneulsoop — CLAUDE.md

## 프로젝트 개요

**오늘숲** 플랫폼 랜딩 페이지.
오늘감(감정 일기)과 글숲(글쓰기 분석) 두 서비스를 소개하고 연결하는 허브 사이트.

- **URL**: https://oneulsoop.324.ing (프로덕션)
- **GitHub**: https://github.com/nohdaeyoung/oneulsoop
- **Stack**: Next.js 16, TypeScript, Tailwind CSS v4
- **배포**: Vercel (git push → 자동 배포)

---

## 플랫폼 구조

```
oneulsoop.324.ing  — 오늘숲 랜딩 (이 프로젝트)
g.324.ing          — 오늘감 (Firebase Auth, Firestore)
soop.324.ing       — 글숲 (NextAuth v5, Supabase)
```

---

## 디자인 시스템

### 컬러 (globals.css @theme)
| 토큰 | 값 | 용도 |
|------|----|------|
| `cream` | `#FAF7F2` | 페이지 배경 |
| `surface` | `#F2EDE4` | 카드 배경 |
| `amber` | `#C8793A` | 오늘감 브랜드 컬러 |
| `amber-light` | `#F0E0CC` | 오늘감 카드 배경 |
| `forest` | `#3A6B4A` | 글숲 브랜드 컬러 |
| `forest-light` | `#D0E4D8` | 글숲 카드 배경 |
| `brand` | `#7C5C3A` | 오늘숲 브랜드 컬러 |
| `primary` | `#1C1714` | 본문 텍스트 |
| `secondary` | `#6B6058` | 보조 텍스트 |
| `muted` | `#A89B8E` | 흐린 텍스트 |

### 폰트
- `--font-serif`: Noto Serif KR (제목)
- `--font-sans`: Noto Sans KR (본문)

---

## 컴포넌트 구조

```
components/
  Nav.tsx          고정 상단 네비게이션
  Hero.tsx         메인 헤드라인 + CTA 버튼 2개
  Services.tsx     오늘감/글숲 기능 소개 카드
  ConnectFlow.tsx  4단계 연동 여정 설명
  CTASection.tsx   인용구 + 서비스 시작 버튼
  Footer.tsx       브랜드 + 링크
```

---

## 링크 수정 시 주의

서비스 URL이 변경되면 모든 컴포넌트에서 일괄 치환:
```bash
# 오늘감 URL 변경
sed -i '' 's|https://g.324.ing|NEW_URL|g' components/*.tsx

# 글숲 URL 변경
sed -i '' 's|https://soop.324.ing|NEW_URL|g' components/*.tsx
```
