import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Project from './Project';

class ProjectPage extends React.Component {

    fetchSelected() {
      const projects = this.props.projects.slice(0, this.props.projects.length);
      let selected = [];
      let sorted = [];

      projects.forEach((proj) => {
        if(proj.activeWith === "primary" || proj.activeWith === "secondary") {
          selected.push(proj);
        }
      });
  
      // sort by score
      sorted = selected.sort((a, b) => b.score - a.score);

      // returned array has every project matching required categories activated for their primary category first
      return sorted;
    }
  
    renderProjectLineOf(projects, range, startingFrom = 0) {
      let line = [];
  
      for(let i = startingFrom; i < range; i++) {
        if(projects[i]) line.push(this.renderProject(projects[i]));
      }
  
      return (
          line
        );
    }
  
    renderProject(proj) { // where proj is an object used to hydrate a Project component
      return (
          <Project
            key={proj.id}
            id={proj.id}
            title={proj.title}
            desc={proj.desc}
            feats={proj.feats}
            links={proj.links}
            img={proj.img}
            isLogo={proj.isLogo}
            score={proj.score}
            primaryCategory={proj.primaryCategory}
            secondaryCategory={proj.secondaryCategory}
            isShown={proj.isShown}
            isSelected={proj.isSelected}
            isSmall={proj.isSmall}
            hasSwitched={proj.hasSwitched}
            activeWith={proj.activeWith}
            onClick={(id) => this.props.onClick(id)}
          />
      );
    }
  
    // 1 project per line until 1083px width, 2 projects per line until 1577, 3 projects per line above that
    render() {
      const projects = this.fetchSelected();
      let rendered = [];
  
      let xRange = 0;
      let firstInLine = 0;
      if(this.props.width < 1083) xRange = 1;
      else if(this.props.width < 1577) xRange = 2;
      else xRange = 3;
      const yRange = Math.ceil(projects.length / xRange);
      
      for(let i = 0; i < yRange; i++) {
        const line = this.renderProjectLineOf(projects, (firstInLine + xRange), firstInLine);
  
        rendered.push(
          <div key={i} className={`projectLine`}>{line}</div>
        );
  
        firstInLine += xRange;
      }
  
      return (
        <TransitionGroup component={null}>
          <div className={`projectPageWrapper ${this.props.direction}`}>
              {rendered}
          </div>
        </TransitionGroup>
      );
    }
}

export default ProjectPage;
  