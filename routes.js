module.exports = [
    {
        path: `/fulcrum-provider/:id/metadata`, // if the name is dynamic this is hardcoded !==
        methods: ['get'],
        handler: 'sharedViewHandler'
      }
    ]