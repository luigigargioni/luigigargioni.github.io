import docker from 'assets/skills/docker.svg'
import express from 'assets/skills/express.png'
import gazebo from 'assets/skills/gazebo.svg'
import gitlab from 'assets/skills/gitlab.svg'
import huggingface from 'assets/skills/huggingface.svg'
import javascript from 'assets/skills/javascript.svg'
import langchain from 'assets/skills/langchain.webp'
import langgraph from 'assets/skills/langgraph.webp'
import nodejs from 'assets/skills/nodejs.svg'
import ollama from 'assets/skills/ollama.png'
import php from 'assets/skills/php.svg'
import python from 'assets/skills/python.svg'
import react from 'assets/skills/react.svg'
import redux from 'assets/skills/redux.svg'
import ros from 'assets/skills/ros.webp'
import rviz from 'assets/skills/rviz.webp'
import sentry from 'assets/skills/sentry.webp'
import strapi from 'assets/skills/strapi.svg'
import typescript from 'assets/skills/typescript.svg'
import vite from 'assets/skills/vitejs.svg'

export type Skill = { name: string; icon: string }

/** First group: research (robotics, AI, LLMs). */
export const skillsAIRobotics: Skill[] = [
  { name: 'ROS 2', icon: ros },
  { name: 'Gazebo', icon: gazebo },
  { name: 'RViz', icon: rviz },
  { name: 'Python', icon: python },
  { name: 'HuggingFace', icon: huggingface },
  { name: 'Ollama', icon: ollama },
  { name: 'LangChain', icon: langchain },
  { name: 'LangGraph', icon: langgraph },
]

/** Second group: building software products. */
export const skillsWebSoftware: Skill[] = [
  { name: 'TypeScript', icon: typescript },
  { name: 'JavaScript', icon: javascript },
  { name: 'React', icon: react },
  { name: 'Redux', icon: redux },
  { name: 'Vite', icon: vite },
  { name: 'Node.js', icon: nodejs },
  { name: 'Express', icon: express },
  { name: 'PHP', icon: php },
  { name: 'Strapi', icon: strapi },
  { name: 'Docker', icon: docker },
  { name: 'GitLab', icon: gitlab },
  { name: 'Sentry', icon: sentry },
]
