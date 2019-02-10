/**
 * Kind enum taken from TypeScript - to break runtime dependency on TypeScript package
 */
export declare enum ExpressionKind {
    Unknown = 0,
    EndOfFileToken = 1,
    SingleLineCommentTrivia = 2,
    MultiLineCommentTrivia = 3,
    NewLineTrivia = 4,
    WhitespaceTrivia = 5,
    ShebangTrivia = 6,
    ConflictMarkerTrivia = 7,
    NumericLiteral = 8,
    BigIntLiteral = 9,
    StringLiteral = 10,
    JsxText = 11,
    JsxTextAllWhiteSpaces = 12,
    RegularExpressionLiteral = 13,
    NoSubstitutionTemplateLiteral = 14,
    TemplateHead = 15,
    TemplateMiddle = 16,
    TemplateTail = 17,
    OpenBraceToken = 18,
    CloseBraceToken = 19,
    OpenParenToken = 20,
    CloseParenToken = 21,
    OpenBracketToken = 22,
    CloseBracketToken = 23,
    DotToken = 24,
    DotDotDotToken = 25,
    SemicolonToken = 26,
    CommaToken = 27,
    LessThanToken = 28,
    LessThanSlashToken = 29,
    GreaterThanToken = 30,
    LessThanEqualsToken = 31,
    GreaterThanEqualsToken = 32,
    EqualsEqualsToken = 33,
    ExclamationEqualsToken = 34,
    EqualsEqualsEqualsToken = 35,
    ExclamationEqualsEqualsToken = 36,
    EqualsGreaterThanToken = 37,
    PlusToken = 38,
    MinusToken = 39,
    AsteriskToken = 40,
    AsteriskAsteriskToken = 41,
    SlashToken = 42,
    PercentToken = 43,
    PlusPlusToken = 44,
    MinusMinusToken = 45,
    LessThanLessThanToken = 46,
    GreaterThanGreaterThanToken = 47,
    GreaterThanGreaterThanGreaterThanToken = 48,
    AmpersandToken = 49,
    BarToken = 50,
    CaretToken = 51,
    ExclamationToken = 52,
    TildeToken = 53,
    AmpersandAmpersandToken = 54,
    BarBarToken = 55,
    QuestionToken = 56,
    ColonToken = 57,
    AtToken = 58,
    EqualsToken = 59,
    PlusEqualsToken = 60,
    MinusEqualsToken = 61,
    AsteriskEqualsToken = 62,
    AsteriskAsteriskEqualsToken = 63,
    SlashEqualsToken = 64,
    PercentEqualsToken = 65,
    LessThanLessThanEqualsToken = 66,
    GreaterThanGreaterThanEqualsToken = 67,
    GreaterThanGreaterThanGreaterThanEqualsToken = 68,
    AmpersandEqualsToken = 69,
    BarEqualsToken = 70,
    CaretEqualsToken = 71,
    Identifier = 72,
    BreakKeyword = 73,
    CaseKeyword = 74,
    CatchKeyword = 75,
    ClassKeyword = 76,
    ConstKeyword = 77,
    ContinueKeyword = 78,
    DebuggerKeyword = 79,
    DefaultKeyword = 80,
    DeleteKeyword = 81,
    DoKeyword = 82,
    ElseKeyword = 83,
    EnumKeyword = 84,
    ExportKeyword = 85,
    ExtendsKeyword = 86,
    FalseKeyword = 87,
    FinallyKeyword = 88,
    ForKeyword = 89,
    FunctionKeyword = 90,
    IfKeyword = 91,
    ImportKeyword = 92,
    InKeyword = 93,
    InstanceOfKeyword = 94,
    NewKeyword = 95,
    NullKeyword = 96,
    ReturnKeyword = 97,
    SuperKeyword = 98,
    SwitchKeyword = 99,
    ThisKeyword = 100,
    ThrowKeyword = 101,
    TrueKeyword = 102,
    TryKeyword = 103,
    TypeOfKeyword = 104,
    VarKeyword = 105,
    VoidKeyword = 106,
    WhileKeyword = 107,
    WithKeyword = 108,
    ImplementsKeyword = 109,
    InterfaceKeyword = 110,
    LetKeyword = 111,
    PackageKeyword = 112,
    PrivateKeyword = 113,
    ProtectedKeyword = 114,
    PublicKeyword = 115,
    StaticKeyword = 116,
    YieldKeyword = 117,
    AbstractKeyword = 118,
    AsKeyword = 119,
    AnyKeyword = 120,
    AsyncKeyword = 121,
    AwaitKeyword = 122,
    BooleanKeyword = 123,
    ConstructorKeyword = 124,
    DeclareKeyword = 125,
    GetKeyword = 126,
    InferKeyword = 127,
    IsKeyword = 128,
    KeyOfKeyword = 129,
    ModuleKeyword = 130,
    NamespaceKeyword = 131,
    NeverKeyword = 132,
    ReadonlyKeyword = 133,
    RequireKeyword = 134,
    NumberKeyword = 135,
    ObjectKeyword = 136,
    SetKeyword = 137,
    StringKeyword = 138,
    SymbolKeyword = 139,
    TypeKeyword = 140,
    UndefinedKeyword = 141,
    UniqueKeyword = 142,
    UnknownKeyword = 143,
    FromKeyword = 144,
    GlobalKeyword = 145,
    BigIntKeyword = 146,
    OfKeyword = 147,
    QualifiedName = 148,
    ComputedPropertyName = 149,
    TypeParameter = 150,
    Parameter = 151,
    Decorator = 152,
    PropertySignature = 153,
    PropertyDeclaration = 154,
    MethodSignature = 155,
    MethodDeclaration = 156,
    Constructor = 157,
    GetAccessor = 158,
    SetAccessor = 159,
    CallSignature = 160,
    ConstructSignature = 161,
    IndexSignature = 162,
    TypePredicate = 163,
    TypeReference = 164,
    FunctionType = 165,
    ConstructorType = 166,
    TypeQuery = 167,
    TypeLiteral = 168,
    ArrayType = 169,
    TupleType = 170,
    OptionalType = 171,
    RestType = 172,
    UnionType = 173,
    IntersectionType = 174,
    ConditionalType = 175,
    InferType = 176,
    ParenthesizedType = 177,
    ThisType = 178,
    TypeOperator = 179,
    IndexedAccessType = 180,
    MappedType = 181,
    LiteralType = 182,
    ImportType = 183,
    ObjectBindingPattern = 184,
    ArrayBindingPattern = 185,
    BindingElement = 186,
    ArrayLiteralExpression = 187,
    ObjectLiteralExpression = 188,
    PropertyAccessExpression = 189,
    ElementAccessExpression = 190,
    CallExpression = 191,
    NewExpression = 192,
    TaggedTemplateExpression = 193,
    TypeAssertionExpression = 194,
    ParenthesizedExpression = 195,
    FunctionExpression = 196,
    ArrowFunction = 197,
    DeleteExpression = 198,
    TypeOfExpression = 199,
    VoidExpression = 200,
    AwaitExpression = 201,
    PrefixUnaryExpression = 202,
    PostfixUnaryExpression = 203,
    BinaryExpression = 204,
    ConditionalExpression = 205,
    TemplateExpression = 206,
    YieldExpression = 207,
    SpreadElement = 208,
    ClassExpression = 209,
    OmittedExpression = 210,
    ExpressionWithTypeArguments = 211,
    AsExpression = 212,
    NonNullExpression = 213,
    MetaProperty = 214,
    SyntheticExpression = 215,
    TemplateSpan = 216,
    SemicolonClassElement = 217,
    Block = 218,
    VariableStatement = 219,
    EmptyStatement = 220,
    ExpressionStatement = 221,
    IfStatement = 222,
    DoStatement = 223,
    WhileStatement = 224,
    ForStatement = 225,
    ForInStatement = 226,
    ForOfStatement = 227,
    ContinueStatement = 228,
    BreakStatement = 229,
    ReturnStatement = 230,
    WithStatement = 231,
    SwitchStatement = 232,
    LabeledStatement = 233,
    ThrowStatement = 234,
    TryStatement = 235,
    DebuggerStatement = 236,
    VariableDeclaration = 237,
    VariableDeclarationList = 238,
    FunctionDeclaration = 239,
    ClassDeclaration = 240,
    InterfaceDeclaration = 241,
    TypeAliasDeclaration = 242,
    EnumDeclaration = 243,
    ModuleDeclaration = 244,
    ModuleBlock = 245,
    CaseBlock = 246,
    NamespaceExportDeclaration = 247,
    ImportEqualsDeclaration = 248,
    ImportDeclaration = 249,
    ImportClause = 250,
    NamespaceImport = 251,
    NamedImports = 252,
    ImportSpecifier = 253,
    ExportAssignment = 254,
    ExportDeclaration = 255,
    NamedExports = 256,
    ExportSpecifier = 257,
    MissingDeclaration = 258,
    ExternalModuleReference = 259,
    JsxElement = 260,
    JsxSelfClosingElement = 261,
    JsxOpeningElement = 262,
    JsxClosingElement = 263,
    JsxFragment = 264,
    JsxOpeningFragment = 265,
    JsxClosingFragment = 266,
    JsxAttribute = 267,
    JsxAttributes = 268,
    JsxSpreadAttribute = 269,
    JsxExpression = 270,
    CaseClause = 271,
    DefaultClause = 272,
    HeritageClause = 273,
    CatchClause = 274,
    PropertyAssignment = 275,
    ShorthandPropertyAssignment = 276,
    SpreadAssignment = 277,
    EnumMember = 278,
    SourceFile = 279,
    Bundle = 280,
    UnparsedSource = 281,
    InputFiles = 282,
    JSDocTypeExpression = 283,
    JSDocAllType = 284,
    JSDocUnknownType = 285,
    JSDocNullableType = 286,
    JSDocNonNullableType = 287,
    JSDocOptionalType = 288,
    JSDocFunctionType = 289,
    JSDocVariadicType = 290,
    JSDocComment = 291,
    JSDocTypeLiteral = 292,
    JSDocSignature = 293,
    JSDocTag = 294,
    JSDocAugmentsTag = 295,
    JSDocClassTag = 296,
    JSDocCallbackTag = 297,
    JSDocEnumTag = 298,
    JSDocParameterTag = 299,
    JSDocReturnTag = 300,
    JSDocThisTag = 301,
    JSDocTypeTag = 302,
    JSDocTemplateTag = 303,
    JSDocTypedefTag = 304,
    JSDocPropertyTag = 305,
    SyntaxList = 306,
    NotEmittedStatement = 307,
    PartiallyEmittedExpression = 308,
    CommaListExpression = 309,
    MergeDeclarationMarker = 310,
    EndOfDeclarationMarker = 311,
    Count = 312,
    FirstAssignment = 59,
    LastAssignment = 71,
    FirstCompoundAssignment = 60,
    LastCompoundAssignment = 71,
    FirstReservedWord = 73,
    LastReservedWord = 108,
    FirstKeyword = 73,
    LastKeyword = 147,
    FirstFutureReservedWord = 109,
    LastFutureReservedWord = 117,
    FirstTypeNode = 163,
    LastTypeNode = 183,
    FirstPunctuation = 18,
    LastPunctuation = 71,
    FirstToken = 0,
    LastToken = 147,
    FirstTriviaToken = 2,
    LastTriviaToken = 7,
    FirstLiteralToken = 8,
    LastLiteralToken = 14,
    FirstTemplateToken = 14,
    LastTemplateToken = 17,
    FirstBinaryOperator = 28,
    LastBinaryOperator = 71,
    FirstNode = 148,
    FirstJSDocNode = 283,
    LastJSDocNode = 305,
    FirstJSDocTagNode = 294,
    LastJSDocTagNode = 305
}
