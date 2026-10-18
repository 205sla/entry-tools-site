import React from "react";
import { choices, questions, site } from "../data/site.js";
import { SectionHeader } from "./SectionBooks.jsx";

export const ToolGuide = () => (
  <section id="choose" className="guide-section" aria-labelledby="choose-title">
    <div className="wrap">
      <h2 id="choose-title">어떤 도구가 필요한가요?</h2>
      <p className="section-intro">하려는 일에 맞는 도구부터 살펴보세요.</p>
      <ul className="choice-grid">
        {choices.map(choice => (
          <li key={choice.href}>
            <a href={choice.href}>
              <h3>{choice.title}</h3>
              <p>{choice.text}</p>
              <span>{choice.label} <span aria-hidden="true">→</span></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export const Questions = () => (
  <section id="questions" className="questions-section" aria-labelledby="questions-title">
    <div className="wrap">
      <SectionHeader eyebrow="06 · questions" title="도구를 고를 때 자주 묻는 질문" titleId="questions-title"
        desc="설치 방식과 사용 목적, 이용 환경을 먼저 확인해 보세요." />
      <div className="question-grid">
        {questions.map(item => (
          <article className="answer" key={item.id} aria-labelledby={item.id}>
            <h3 id={item.id}><a href={`#${item.id}`}>{item.question}</a></h3>
            <p>{item.answer}</p>
            <ul className="answer-links" aria-label="관련 안내">
              {item.links.map(link => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <aside id="sources" className="sources" aria-labelledby="sources-title">
        <h3 id="sources-title">안내 기준과 출처</h3>
        <p>이 페이지는 제작자 이영호(205)가 관리합니다. 각 카드의 링크는 해당 도구 사이트, Chrome Web Store 등록 페이지 또는 관련 안내로 연결됩니다. 설치 조건과 최신 사용 방법은 연결된 페이지에서 확인하세요.</p>
        <p>소개 내용 수정: <time dateTime={site.updated}>2026년 10월 18일</time></p>
        <ul className="answer-links">
          <li><a href={site.source}>이 페이지 소스</a></li>
          <li><a href="https://github.com/205sla/entry-vibe-coding">바이브코딩 프로젝트 문서</a></li>
          <li><a href="/llms.txt">텍스트로 보는 도구 목록</a></li>
        </ul>
      </aside>
    </div>
  </section>
);
