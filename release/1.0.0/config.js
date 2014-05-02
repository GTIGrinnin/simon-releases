configJson = {
  "title": "A-Team Jobs",
  "sections": [
    {
      "hostname": "jenkins-master.com",
      "sections": [
        {
          "title": "test-pipeline-01",
          "url": "http://jenkins-master/view/pipeline1/",
          "description": "Branch: <b>Master</b>, Build: <b>Nightly</b>",
          "monitors": [
            {
              "name": "CI Job 1",
              "externalRef": "ci-1"
            },
            {
              "name": "Retest System",
              "externalRef": "test-1"
            },
            {
              "name": "Retest System Smoketests",
              "externalRef": "smoke-tests-1"
            },
            {
              "name": "Performance Tests",
              "externalRef": "performance-tests-1"
            },
            {
              "name": "Sonar",
              "externalRef": "sonar-1"
            },
            {
              name: "Pipeline 1 Sonar",
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
          "title": "test-pipeline-02",
          "url": "http://jenkins-master/view/pipeline2/",
          "description": "Branch: <b>Master</b>, Build: <b>Nightly</b>",
          "monitors": [
            {
              "name": "CI Job 2",
              "externalRef": "ci-2"
            },
            {
              "name": "Retest System",
              "externalRef": "test-2"
            },
            {
              "name": "Retest System Smoketests",
              "externalRef": "smoke-tests-2"
            }
          ]
        },
        {
          "title": "test-pipeline-03",
          "url": "http://jenkins-master/view/pipeline3/",
          "description": "Branch: <b>teamname Feature</b>, Build: <b>Manuell</b>",
          "monitors": [
            {
              "name": "Workspace (Java 7, 64bit)",
              "externalRef": "ci-3"
            },
            {
              "name": "Retest System",
              "externalRef": "test-3"
            },
            {
              "name": "Retest System Smoketests",
              "externalRef": "smoke-tests-3"
            }
          ]
        }
      ]
    }
  ]
};