configJson = {
  title: "Main Title",
  sections: [
    {
      title: "section 1",
      hostname: "jenkins-master.com",
      sections: [
        {
          title: "sub-section 1",
          url: "http://jenkins-master/view/pipeline1/",
          description: "Branch: <b>Master</b>, Build: <b>Nightly</b>",
          monitors: [
            {
              name: "Jenkins Job - CI",
              externalRef: "ci-1"
            },
            {
              name: "Jenkins Job - Retest System",
              externalRef: "test-1"
            },
            {
              name: "Jenkins Job - Retest System Smoketests",
              externalRef: "smoke-tests-1"
            },
            {
              name: "Jenkins Job - Performance Tests",
              externalRef: "performance-tests-1"
            },
            {
              name: "Jenkins Job - Sonar",
              externalRef: "sonar-1"
            },
            {
              name: "Sonar Analysis",
              type: "sonar",
              hostname: "my-sonar.com",
              externalRef: [
                {
                  name: "All modules",
                  id: "my.company:project:profile"
                },
                {
                  name: "module",
                  id: "my.company:module:profile"
                }
              ]
            }
          ]
        },
        {
          title: "sub-section 2",
          url: "http://jenkins-master/view/pipeline2/",
          description: "Branch: <b>Master</b>, Build: <b>Nightly</b>",
          monitors: [
            {
              name: "Jenkins Job - CI",
              externalRef: "ci-2"
            },
            {
              name: "Jenkins Job - Retest System",
              externalRef: "test-2"
            },
            {
              name: "Jenkins Job - Retest System Smoketests",
              externalRef: "smoke-tests-2"
            }
          ]
        },
        {
          title: "sub-section 3",
          url: "http://jenkins-master/view/pipeline3/",
          description: "Branch: <b>teamname Feature</b>, Build: <b>Manuell</b>",
          monitors: [
            {
              name: "Jenkins Job - CI",
              externalRef: "ci-3"
            },
            {
              name: "Jenkins Job - Retest System",
              externalRef: "test-3"
            },
            {
              name: "Jenkins Job - Retest System Smoketests",
              externalRef: "smoke-tests-3"
            }
          ]
        }
      ]
    },
    {
      title: "section 2",
      hostname: "jenkins-master.com",
      sections: [
        {
          title: "sub-section 1",
          url: "http://jenkins-master/view/pipeline1/",
          description: "Branch: <b>Master</b>, Build: <b>Nightly</b>",
          monitors: [
            {
              name: "Jenkins Job - CI",
              externalRef: "ci-4"
            },
            {
              name: "Jenkins Job - Retest System",
              externalRef: "test-4"
            },
            {
              name: "Jenkins Job - Retest System Smoketests",
              externalRef: "smoke-tests-4"
            },
            {
              name: "Jenkins Job - Performance Tests",
              externalRef: "performance-tests-4"
            },
            {
              name: "Jenkins Job - Sonar",
              externalRef: "sonar-4"
            },
            {
              name: "Sonar Analysis",
              type: "sonar",
              hostname: "my-sonar.com",
              externalRef: [
                {
                  name: "All modules",
                  id: "my.company:project:profile"
                },
                {
                  name: "module",
                  id: "my.company:module:profile"
                }
              ]
            }
          ]
        },
        {
          title: "sub-section 2",
          url: "http://jenkins-master/view/pipeline2/",
          description: "Branch: <b>Master</b>, Build: <b>Nightly</b>",
          monitors: [
            {
              name: "Jenkins Job - CI",
              externalRef: "ci-5"
            },
            {
              name: "Jenkins Job - Retest System",
              externalRef: "test-5"
            },
            {
              name: "Jenkins Job - Retest System Smoketests",
              externalRef: "smoke-tests-5"
            }
          ]
        },
        {
          title: "sub-section 3",
          url: "http://jenkins-master/view/pipeline3/",
          description: "Branch: <b>teamname Feature</b>, Build: <b>Manuell</b>",
          monitors: [
            {
              name: "Jenkins Job - CI",
              externalRef: "ci-6"
            },
            {
              name: "Jenkins Job - Retest System",
              externalRef: "test-6"
            },
            {
              name: "Jenkins Job - Retest System Smoketests",
              externalRef: "smoke-tests-6"
            }
          ]
        }
      ]
    }
  ],
  configuration: {
    hosts: [
      {
        hostname: "jenkins-master.com",
        protocol: "https",
        prefix: "jenkins"
      }
    ],
    expiry: 36
  }
};