const { createApp } = Vue

createApp({
    data() {
        return {
            currentQuiz: null,
            currentQuestionIndex: 0,
            selectedAnswer: null,
            score: 0,
            quizCompleted: false,
            userAnswers: [], 
            quizzes: [
                {
                    id: 'bac-pro-cyber-securite',
                    title: 'BAC PRO CIEL',
                    questions: [
                        {
                            text: 'Qu\'est-ce qu\'un firewall ?',
                            options: [
                                'Un logiciel antivirus',
                                'Un pare-feu réseau',
                                'Un gestionnaire de mots de passe',
                                'Un système de cryptage'
                            ],
                            correctAnswer: 1,
                            explanation: 'Un firewall protège le réseau en filtrant le trafic et en bloquant les connexions non autorisées.'
                        },
                        {
                            text: 'Qu\'est-ce que le phishing ?',
                            options: [
                                'Une technique de piratage de réseau',
                                'Une méthode de vol d\'identité en ligne',
                                'Un type de logiciel malveillant',
                                'Un protocole de sécurité'
                            ],
                            correctAnswer: 1,
                            explanation: 'Le phishing tente de tromper les utilisateurs pour voler des informations personnelles.'
                        },
                        {
                            text: 'Qu\'est-ce qu\'un VPN ?',
                            options: [
                                'Un logiciel antivirus',
                                'Un réseau privé virtuel',
                                'Un système de protection contre les malwares',
                                'Un gestionnaire de mots de passe'
                            ],
                            correctAnswer: 1,
                            explanation: 'Un VPN chiffre et sécurise la connexion internet.'
                        },
                        {
                            text: 'Qu\'est-ce qu\'un cryptage ?',
                            options: [
                                'Un type de logiciel malveillant',
                                'Une méthode de sécurisation des données',
                                'Un système de surveillance réseau',
                                'Un protocole de communication'
                            ],
                            correctAnswer: 1,
                            explanation: 'Le cryptage transforme des données en un code illisible sans clé de déchiffrement.'
                        },
                        {
                            text: 'Qu\'est-ce que l\'authentification à deux facteurs ?',
                            options: [
                                'Un mot de passe complexe',
                                'Une connexion via deux réseaux',
                                'Une sécurité utilisant deux méthodes d\'identification',
                                'Un système de surveillance'
                            ],
                            correctAnswer: 2,
                            explanation: 'L\'authentification à deux facteurs ajoute une couche supplémentaire de sécurité.'
                        }
                    ]
                },
                {
                    id: 'bac-pro-melec',
                    title: 'BAC PRO MELEC',
                    questions: [
                        {
                            text: 'Qu\'est-ce qu\'un disjoncteur ?',
                            options: [
                                'Un appareil de protection contre les surintensités',
                                'Un dispositif de commande électrique',
                                'Un instrument de mesure électrique',
                                'Un composant de circuits imprimés'
                            ],
                            correctAnswer: 0,
                            explanation: 'Un disjoncteur coupe automatiquement le courant en cas de surcharge ou de court-circuit.'
                        },
                        {
                            text: 'Qu\'est-ce que l\'impédance ?',
                            options: [
                                'Une mesure de la résistance en courant continu',
                                'La résistance totale dans un circuit en courant alternatif',
                                'Un type de connexion électrique',
                                'Un matériau conducteur'
                            ],
                            correctAnswer: 1,
                            explanation: 'L\'impédance représente la résistance totale d\'un circuit en courant alternatif.'
                        },
                        {
                            text: 'Qu\'est-ce qu\'un transformateur ?',
                            options: [
                                'Un appareil qui modifie la tension électrique',
                                'Un outil de mesure de courant',
                                'Un type de câble électrique',
                                'Un composant de protection électrique'
                            ],
                            correctAnswer: 0,
                            explanation: 'Un transformateur permet de modifier la tension électrique entre deux circuits.'
                        },
                        {
                            text: 'Qu\'est-ce que le courant alternatif ?',
                            options: [
                                'Un courant qui ne change jamais de direction',
                                'Un courant qui change périodiquement de direction',
                                'Un type de câble électrique',
                                'Une mesure de la résistance électrique'
                            ],
                            correctAnswer: 1,
                            explanation: 'Le courant alternatif change de direction à intervalles réguliers.'
                        },
                        {
                            text: 'Qu\'est-ce qu\'un ohmmètre ?',
                            options: [
                                'Un appareil de mesure de la tension',
                                'Un instrument de mesure de la résistance électrique',
                                'Un outil de protection électrique',
                                'Un composant de circuit électrique'
                            ],
                            correctAnswer: 1,
                            explanation: 'Un ohmmètre mesure la résistance électrique d\'un composant ou d\'un circuit.'
                        }
                    ]
                },
                {
                    id: 'bac-pro-froid-clim',
                    title: 'BAC PRO Froid et Climatisation',
                    questions: [
                        {
                            text: 'Quel est le rôle principal d\'un compresseur ?',
                            options: [
                                'Refroidir l\'air',
                                'Comprimer le fluide frigorigène',
                                'Filtrer l\'air',
                                'Distribuer le fluide'
                            ],
                            correctAnswer: 1,
                            explanation: 'Le compresseur augmente la pression du fluide frigorigène, permettant son cycle de refroidissement.'
                        },
                        {
                            text: 'Qu\'est-ce que le point de rosée ?',
                            options: [
                                'La température de condensation de la vapeur d\'eau',
                                'La température maximale d\'un système de climatisation',
                                'La pression du fluide frigorigène',
                                'La vitesse de circulation d\'air'
                            ],
                            correctAnswer: 0,
                            explanation: 'Le point de rosée est la température à laquelle la vapeur d\'eau commence à se condenser.'
                        },
                        {
                            text: 'Qu\'est-ce qu\'un détendeur ?',
                            options: [
                                'Un dispositif de compression',
                                'Un appareil qui réduit la pression du fluide frigorigène',
                                'Un filtre à air',
                                'Un capteur de température'
                            ],
                            correctAnswer: 1,
                            explanation: 'Le détendeur réduit la pression du fluide frigorigène, provoquant son refroidissement.'
                        },
                        {
                            text: 'Quel est le rôle d\'un évaporateur ?',
                            options: [
                                'Comprimer le fluide frigorigène',
                                'Condenser le fluide',
                                'Absorber la chaleur et refroidir l\'air',
                                'Filtrer l\'air'
                            ],
                            correctAnswer: 2,
                            explanation: 'L\'évaporateur absorbe la chaleur de l\'environnement, ce qui refroidit l\'air.'
                        },
                        {
                            text: 'Qu\'est-ce que le coefficient de performance (COP) ?',
                            options: [
                                'La vitesse de rotation d\'un ventilateur',
                                'Le rapport entre l\'énergie produite et consommée',
                                'La pression du fluide frigorigène',
                                'La température maximale d\'un système'
                            ],
                            correctAnswer: 1,
                            explanation: 'Le COP mesure l\'efficacité énergétique d\'un système de climatisation ou de réfrigération.'
                        }
                    ]
                },
                {
                    id: 'bac-pro-chauffagerie',
                    title: 'BAC PRO Chauffagerie',
                    questions: [
                        {
                            text: 'Qu\'est-ce qu\'un radiateur à eau chaude ?',
                            options: [
                                'Un dispositif de refroidissement',
                                'Un système de chauffage par circulation d\'eau chaude',
                                'Un filtre à eau',
                                'Un capteur de température'
                            ],
                            correctAnswer: 1,
                            explanation: 'Un radiateur à eau chaude transmet la chaleur via de l\'eau circulant dans ses tubes.'
                        },
                        {
                            text: 'Qu\'est-ce qu\'une chaudière à condensation ?',
                            options: [
                                'Une chaudière qui produit beaucoup de fumée',
                                'Un système qui récupère la chaleur des gaz d\'échappement',
                                'Une chaudière uniquement pour l\'eau chaude sanitaire',
                                'Un type de cheminée'
                            ],
                            correctAnswer: 1,
                            explanation: 'Une chaudière à condensation récupère l\'énergie des gaz de combustion pour améliorer son rendement.'
                        },
                        {
                            text: 'Qu\'est-ce qu\'un calorifuge ?',
                            options: [
                                'Un matériau isolant thermique',
                                'Un type de chauffage électrique',
                                'Un instrument de mesure de température',
                                'Un composant de système de ventilation'
                            ],
                            correctAnswer: 0,
                            explanation: 'Un calorifuge est un matériau qui limite les déperditions de chaleur.'
                        },
                        {
                            text: 'Qu\'est-ce qu\'une pompe à chaleur ?',
                            options: [
                                'Un système de pompage d\'eau',
                                'Un appareil qui transfère la chaleur d\'un endroit à un autre',
                                'Un type de radiateur',
                                'Un compresseur industriel'
                            ],
                            correctAnswer: 1,
                            explanation: 'Une pompe à chaleur prélève la chaleur d\'une source (air, terre, eau) pour chauffer un espace.'
                        },
                        {
                            text: 'Qu\'est-ce que le rendement thermique ?',
                            options: [
                                'La vitesse de chauffage d\'un système',
                                'Le rapport entre énergie utilisée et énergie consommée',
                                'La température maximale d\'un appareil',
                                'La capacité de stockage de chaleur'
                            ],
                            correctAnswer: 1,
                            explanation: 'Le rendement thermique mesure l\'efficacité d\'un système de chauffage à convertir l\'énergie.'
                        }
                    ]
                }
            ]
        }
    },
    computed: {
        currentQuestion() {
            return this.currentQuiz.questions[this.currentQuestionIndex]
        },
        isLastQuestion() {
            return this.currentQuestionIndex === this.currentQuiz.questions.length - 1
        },
        shuffledOptions() {
            const options = this.currentQuestion.options.map((text, originalIndex) => ({ 
                text, 
                originalIndex 
            }));
            return this.shuffleArray(options);
        }
    },
    methods: {
        shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        },
        startQuiz(quiz) {
            this.currentQuiz = quiz
            this.currentQuestionIndex = 0
            this.selectedAnswer = null
            this.score = 0
            this.quizCompleted = false
            this.userAnswers = [] 
        },
        resetQuiz() {
            this.currentQuiz = null
            this.currentQuestionIndex = 0
            this.selectedAnswer = null
            this.score = 0
            this.quizCompleted = false
            this.userAnswers = [] 
        },
        selectAnswer(optionIndex) {
            this.selectedAnswer = optionIndex
        },
        nextQuestion() {
            this.userAnswers.push(this.selectedAnswer)

            if (this.selectedAnswer === this.currentQuestion.correctAnswer) {
                this.score++
            }

            if (this.isLastQuestion) {
                this.quizCompleted = true
            } else {
                this.currentQuestionIndex++
                this.selectedAnswer = null
            }
        },
        returnToDomainSelection() {
            this.resetQuiz()
        }
    }
}).mount('#app')