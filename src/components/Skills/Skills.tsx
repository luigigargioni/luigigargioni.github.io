import React from 'react'

import { Portfolio } from 'hooks/usePortfolio'

type Props = { id: string; portfolio: Portfolio }

export const Skills = ({ id, portfolio }: Props) => (
  <section id={id} className="site-section">
    <div className="panel reveal">
      <h2 className="kicker">02 — {portfolio.skills.title}</h2>
      {portfolio.skills.groups.map((group, groupIndex) => (
        <div className="skill-group" key={group.title}>
          <h3 className="skill-group-title">{group.title}</h3>
          {group.items.map((skill, index) => (
            <span
              className="skill"
              key={skill.name}
              // staggered pop-in when the section is revealed
              style={{
                transitionDelay: `${(groupIndex * group.items.length + index) * 30}ms`,
              }}
            >
              <img src={skill.icon} alt="" />
              {skill.name}
            </span>
          ))}
        </div>
      ))}
    </div>
  </section>
)
