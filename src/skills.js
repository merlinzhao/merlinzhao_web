// Devicon names for every tech badge shown on experience and project cards.
// Cards reference skills by these keys.
const DEVICONS = {
  Bootstrap: "bootstrap-plain",
  Python: "python-plain",
  NodeJS: "nodejs-plain",
  Javascript: "javascript-plain",
  Swift: "swift-plain",
  VueJS: "vuejs-plain",
  CSS3: "css3-plain",
  HTML5: "html5-plain",
  "Android Dev": "android-plain",
  Java: "java-plain",
  Ruby: "ruby-plain",
  Rails: "rails-plain",
  MySQL: "mysql-plain",
  C: "c-plain",
  React: "react-plain",
  Jenkins: "jenkins-plain",
  AWS: "amazonwebservices-plain-wordmark",
  GCP: "googlecloud-plain",
  Docker: "docker-plain",
  Kubernetes: "kubernetes-plain",
  Typescript: "typescript-plain",
  Redis: "redis-plain",
  Rust: "rust-plain",
  PostgreSQL: "postgresql-plain",
};

// Maps skill names to { name, class } in the given order, skipping unknown names.
export function skillIcons(names) {
  return names
    .filter((name) => name in DEVICONS)
    .map((name) => ({ name, class: `devicon-${DEVICONS[name]} colored icon` }));
}
