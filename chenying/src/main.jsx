import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import heroReference from './hero-reference.jpg';
import profilePhoto from './profile-photo.jpg';
import projectDouyinSmall from './project-douyin-small.png';
import projectHit1 from './project-hit-1.jpg';
import projectHit2 from './project-hit-2.jpg';
import projectXhsMain from './project-xhs-main.png';
import projectXhsSmall from './project-xhs-small.png';
import strengthCommunitySop from './strength-community-sop.png';
import strengthConversionPath from './strength-conversion-path.png';
import strengthOperationFlow from './strength-operation-flow.png';
import strengthTopicMatrix from './strength-topic-matrix.png';

const methodImages = [
  {
    src: strengthOperationFlow,
    title: '运营流程图',
    desc: '从目标拆解、用户洞察到内容发布和数据复盘，展示完整运营思路。',
  },
  {
    src: strengthTopicMatrix,
    title: '内容选题矩阵',
    desc: '用用户阶段和内容类型搭建选题库，让内容生产稳定、可延展。',
  },
  {
    src: strengthCommunitySop,
    title: '社群运营 SOP',
    desc: '把入群承接、用户分层、日常互动和转化跟进拆成可执行动作。',
  },
  {
    src: strengthConversionPath,
    title: '用户转化路径',
    desc: '从公域曝光到私域承接，再到咨询转化和留存裂变形成闭环。',
  },
];

function App() {
  return (
    <>
      <header className="site-nav" aria-label="主导航">
        <a className="brand" href="#hero" aria-label="回到首页">
          陈颖
        </a>
        <nav>
          <a href="#profile">个人背景</a>
          <a href="#projects">项目案例</a>
          <a href="#methods">运营方法</a>
          <a href="#contact">联系我</a>
        </nav>
        <a className="nav-cta" href="mailto:214629425@qq.com">
          发邮件
        </a>
      </header>

      <main>
        <section className="hero section-full" id="hero">
          <img className="hero-photo" src={heroReference} alt="雾气中的森林小路和山间房屋" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content page-shell">
            <p className="soft-label">New Media Operation Portfolio</p>
            <h1>让内容像林间小路，把用户带到答案前。</h1>
            <p className="hero-copy">
              我是陈颖，求职方向是新媒体运营 / 内容运营。我的作品集不只展示做过什么，
              也展示我如何理解用户、组织内容、承接社群，并用数据复盘下一步。
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">查看代表项目</a>
              <a className="secondary-button" href="#methods">查看运营方法</a>
            </div>
            <div className="hero-note">
              <span>内容策划</span>
              <span>账号运营</span>
              <span>社群承接</span>
              <span>数据复盘</span>
            </div>
          </div>
        </section>

        <section className="profile section-panel" id="profile">
          <div className="page-shell profile-layout">
            <div className="profile-copy">
              <p className="section-kicker">About Chen Ying</p>
              <h2>我关注的不只是把内容发出去，而是让内容真的产生作用。</h2>
              <p className="lead">
                我做过服饰品牌小红书账号运营、教育行业内容与社群运营，也参与过公众号内容策划。
                相比单纯追热点，我更习惯先拆清楚用户是谁、为什么停留、为什么愿意咨询。
              </p>
              <div className="profile-points">
                <p>
                  <strong>内容侧：</strong>
                  参与 12 万粉小红书账号运营，围绕选题、封面、标题、脚本和发布节奏做持续优化。
                </p>
                <p>
                  <strong>社群侧：</strong>
                  负责教育类家长社群维护，通过每日内容节奏、活动物料和分层沟通提升活跃度。
                </p>
                <p>
                  <strong>复盘侧：</strong>
                  关注曝光、互动、收藏、私信、进群、咨询等数据，把结果反推到下一轮内容策略。
                </p>
              </div>
            </div>

            <aside className="profile-aside" aria-label="个人信息">
              <img src={profilePhoto} alt="陈颖个人照片" />
              <div className="profile-meta">
                <h3>陈颖</h3>
                <p>新媒体运营 / 内容运营方向</p>
                <a href="mailto:214629425@qq.com">214629425@qq.com</a>
                <a href="tel:19280770429">19280770429</a>
                <span>上海 · 2026届本科</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="projects section-panel" id="projects">
          <div className="page-shell">
            <div className="section-heading">
              <p className="section-kicker">Selected Project</p>
              <h2>好奇蜜斯服饰品牌内容运营项目</h2>
              <p>
                这个项目展示我如何围绕品牌账号做内容定位、平台分发、素材协同和数据复盘。
                重点不是“发过内容”，而是能把账号增长和内容质量放在同一条路径里看。
              </p>
            </div>

            <div className="project-hero">
              <figure className="project-main-shot">
                <img src={projectXhsMain} alt="好奇蜜斯小红书主账号截图" />
              </figure>
              <div className="project-summary">
                <p className="section-kicker">Project Result</p>
                <h3>从产品展示，转向场景种草与用户共鸣。</h3>
                <p>
                  面向年轻女性用户，我将内容重点放在场景穿搭、真实体验和痛点解决上，
                  让账号从单向展示变成更有陪伴感的内容窗口。
                </p>
                <dl className="metric-list">
                  <div>
                    <dt>+2.8万</dt>
                    <dd>4个月净增粉丝</dd>
                  </div>
                  <div>
                    <dt>4篇</dt>
                    <dd>10W+ 爆款内容</dd>
                  </div>
                  <div>
                    <dt>30家</dt>
                    <dd>品牌合作沟通推进</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="project-story">
              <article>
                <p className="section-kicker">My Role</p>
                <h3>我在项目里承担的工作</h3>
                <p>
                  我参与选题拆解、封面方向优化、脚本整理、拍摄协同、剪辑交付和发布复盘。
                  执行时会先拆爆款内容中的标题钩子、封面利益点和评论反馈，再判断哪些元素能迁移到品牌账号里。
                </p>
              </article>
              <article>
                <p className="section-kicker">Operation Logic</p>
                <h3>复盘不是最后一步，而是下一轮内容的起点</h3>
                <p>
                  每轮内容发布后，我会关注点击、互动、收藏、评论和账号增长趋势，判断哪些选题值得继续系列化，
                  哪些内容需要换角度重做，避免只追求“发得多”。
                </p>
              </article>
            </div>

            <div className="account-strip" aria-label="多平台账号展示">
              <figure>
                <img src={projectXhsSmall} alt="好奇蜜斯小红书小号截图" />
                <figcaption>小红书小号：补充内容风格与题材测试</figcaption>
              </figure>
              <figure>
                <img src={projectDouyinSmall} alt="好奇蜜斯抖音小号截图" />
                <figcaption>抖音小号：用于平台延展和短视频分发验证</figcaption>
              </figure>
              <figure>
                <img src={projectHit1} alt="好奇蜜斯爆款内容示例一" />
                <figcaption>爆款内容：场景穿搭与上身效果展示</figcaption>
              </figure>
              <figure>
                <img src={projectHit2} alt="好奇蜜斯爆款内容示例二" />
                <figcaption>爆款内容：款式推荐与评论互动引导</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="methods section-panel" id="methods">
          <div className="page-shell">
            <div className="section-heading">
              <p className="section-kicker">Methods</p>
              <h2>我把运营能力整理成可复用的流程，而不是零散经验。</h2>
              <p>
                下面这组图是我对新媒体运营工作的结构化整理，适合用于展示选题、账号、社群和转化思路。
                它们说明我能把复杂任务拆成清楚步骤，并形成可执行的工作方法。
              </p>
            </div>

            <div className="method-feature">
              <div className="method-copy">
                <p className="section-kicker">Framework</p>
                <h3>以用户需求为起点，以数据复盘推动下一轮增长。</h3>
                <p>
                  我的运营方法论是：先理解用户，再搭内容矩阵；先做公域触达，再用私信和社群承接；
                  最后用数据判断哪些动作应该被放大，哪些需要重做。
                </p>
              </div>
              <img src={strengthOperationFlow} alt="陈颖运营流程图" />
            </div>

            <div className="method-gallery">
              {methodImages.slice(1).map((item) => (
                <figure className="method-item" key={item.title}>
                  <img src={item.src} alt={`陈颖${item.title}`} />
                  <figcaption>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-full" id="contact">
          <div className="page-shell contact-content">
            <p className="soft-label">Let&apos;s work with content carefully</p>
            <h2>如果你需要一个能把内容、用户和转化串起来的人，我们可以聊聊。</h2>
            <div className="contact-actions">
              <a className="primary-button" href="mailto:214629425@qq.com">发送邮件</a>
              <a className="secondary-button" href="tel:19280770429">电话联系</a>
            </div>
            <p className="footer-note">陈颖 · 新媒体运营 / 内容运营作品集</p>
          </div>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
