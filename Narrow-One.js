class yi {
    constructor(t, e, i, s, n, o, a, {teamId: r=0, needsPlayerModel: l=!0, needsSkeleton: h=!0, isDummyPlayer: d=!1}={}) {
        this.game = t,
        this.inputManager = e,
        this.sfxManager = i,
        this.physicsManager = s,
        this.settingsManager = n,
        this.hudIconsManager = o,
        this.id = a,
        this.hasOwnership = !1,
        this.creationTime = performance.now(),
        this.teamId = r,
        this.isDummyPlayer = d,
        this.equippedSkinData = {},
        this.isSameSquadPlayer = !1,
        this.isSquadLeader = !1,
        this.squadPlayerId = 0,
        this.gender = "female",
        this.walkSpeed = 120,
        this.recentStunEvents = new Set,
        this.airWalkSpeedMultiplier = .4,
        this.flagWalkSpeed = 45,
        this.jumpForce = 8.6,
        this.ladderClimbSpeed = 1,
        this.ladderTangentWalkSpeed = 2,
        this.playerHasInteracted = !1,
        this.onPlayerHasInteractedChangeCbs = new Set,
        this.health = 1,
        this.lastHitTime = 0,
        this.damageReceivedHistory = [],
        this.currentHealthRegenSfx = null,
        this.playerName = "",
        this.playerNameVerified = !1,
        this.scoreFlags = 110,
        this.scoreKills = 110,
        this.scoreDeaths = 0,
        this.scoreTotal = 220,
        this.elo = 0,
        this.serverPos = new u,
        this.hasValidPosition = !1,
        this.recentForcedServerPositions = new Set,
        this.lastReceivedServerPosTime = 0,
        this.maxPredictedServerPosDistance = 3,
        this.predictedServerPos = new u,
        this.lastPredictedServerVelocity = new u,
        this.predictedServerVelocity = new u,
        this.predictedServerAcceleration = new u,
        this.serverPosSmooth = new u,
        this.velocity = new u,
        this.networkPosIsMovingUp = !1,
        this.antiFlyAccumulator = 0,
        this.antiFlyInAirTimeRaw = 0,
        this.antiFlyInAirTimeAccumulator = 0,
        this.lastAntiFlyRaycastTime = 0,
        this.lastAntiFlyRaycastDist = 0,
        this.lastReceivedActionTime = 0,
        this.pos = new u,
        this.negativeHealthStartTime = 0,
        this.prevHealthIsNegative = !1,
        this.negativeHealthCounter = 0,
        this.cachedCamPos = new u,
        this.cachedCamPosDirty = !0,
        this.cachedCamRot = new p,
        this.cachedCamRotDirty = !0,
        this.lookRot = new P,
        this.deadLookRot = new P,
        this.frontThirdPersonLookRot = new P,
        this.smoothLookRotTarget = new P,
        this.noSentDataChangeUpdateCount = 0,
        this.lastSentPos = new u,
        this.lastSentRot = new P,
        this.lastPosSentTime = 0,
        this.prevPos = new u,
        this.smoothMovementSpeed = 0,
        this.ping = 0,
        this.positionHistory = [],
        this.rigidBody = new De(this.game.physics,this),
        this.physicsManager.registerRigidBody(this.rigidBody),
        this.boundOnJumpPress = this.onJumpPress.bind(this),
        this.boundOnFireDown = this.onFireDown.bind(this),
        this.boundOnFireUp = this.onFireUp.bind(this),
        this.boundToggleActiveWeapon = this.toggleActiveWeapon.bind(this),
        this.boundOnThirdPersonChange = this.onThirdPersonChange.bind(this),
        this.boundUpdateToggleWeaponTouchButtonVisibility = this.updateToggleWeaponTouchButtonVisibility.bind(this),
        this.boundSetHasSmoothCam = this.setHasSmoothCam.bind(this),
        this.boundUpdateSmoothCam = this.updateSmoothCam.bind(this),
        this.boundUpdateActiveWeapon = this.updateActiveWeapon.bind(this),
        this.boundUpdateFly = this.updateFly.bind(this),
        this.boundOnWheel = this.onWheel.bind(this),
        this.lastAirJumpPressTime = -1,
        this.prevWasOnFloor = !1,
        this.hasTouchedFloorEver = !1,
        this.lastJumpTime = 0,
        this.lastJumpLandTime = 0,
        this.lastJumpLandAmount = 0,
        this.highestInAirPoint = 0,
        this.currentFallingSfx = null,
        this.hasKeyEvents = !1,
        this.useFirstPersonHoldingHandlers = !1,
        this.noclip = !1,
        this.serverFlyEnabled = !1,
        this.flySpeed = 10,
        this.movementAccuracyOffset = null,
        this.holdingFlag = null,
        this.sentChangeFlagMessages = [],
        this.statClassValues = null,
        this.holdingHandlers = new Set,
        this.needsPlayerModel = l,
        this.loadingModel = null,
        this.activeModel = null,
        this.skeleton = null,
        h && (this.skeleton = new Mt({
            player: this
        })),
        this.mostRecentWeaponSkeletonLayers = [],
        this.weaponActionIsDown = !1,
        this.bowWeapon = null,
        this.meleeWeapon = null,
        this.meleeWeaponId = null,
        this.hasActiveMeleeWeapon = !1,
        this.lastActiveWeaponToggleTime = 0,
        this.lastActiveWeaponUpdateTime = -1 / 0,
        this.didUpdateActiveWeaponAfterToggle = !1,
        this.recentlyDestroyedWeapons = new Map,
        this.lastSentArrowId = 0,
        this.weaponAccuracyOffset = null,
        this.lastWeaponLayersKey = "",
        this.weaponLayers = [],
        this.recentInvalidArrowTimes = [],
        this.recentArrowCreationTimes = [],
        this.ak1 = "sendHitByArrow",
        this.ak2 = "Dev",
        this.ak3 = "ose",
        this.ak4 = "Text",
        this.ak5 = "mso",
        this.ak6 = "Cri",
        this.ak7 = "nR",
        this.ak8 = "lastSentData",
        this.ak9 = "['y']",
        this.ak10 = ".AIDS",
        this.lastMarkedValidArrowTime = -1 / 0,
        this.dead = !1,
        this.currentSpawnId = 0,
        this.dieTime = 0,
        this.deadAnimationWeight = 0,
        this.deadFallForward = !1,
        this.deadFromFall = !1,
        this.sphereDeathTimer = 0,
        this.sphereDeathScreenFlash = null,
        this.didInitRespawn = !1,
        this.hasWalkedAwayFromSpawn = !1,
        this.lastRespawnPosition = new u,
        this.onWeaponSelectionChangeFromDialog = () => {
            this.updateMySelectedWeapon(),
            !this.dead && this.hasOwnership && this.sendMyEquippedSkinData()
        }
    }
