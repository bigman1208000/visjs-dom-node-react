export default {
  height: '100%',
  width: '100%',
  autoResize: true,
  interaction: {
    hover: true,
    hoverConnectedEdges: true
  },
  nodes: {
    borderWidth: 0,
    borderWidthSelected: 0,
    shape: 'dot',
    color: 'rgba(200, 200, 200, 0.3)',
    font: {
      size: 20,
      face: 'Calibri'
    },
    shadow: {
      enabled: true
    },
  },
  edges: {
    arrows: {
      to: {
        enabled: true, 
        scaleFactor: 0.4
      },
    },
    font: {
      size: 10
    },
    scaling: {
      min: 1,
      max: 8,
      label: {
        enabled: true,
        min: 12,
        max: 20,
      }
    },
    smooth: true,
    width: 0.2,
    hoverWidth: 0.2,
    selectionWidth: 0.2,
    color: {
      color: 'rgba(0, 0, 255, 0.1)',
      hover: '#ff0000',
      highlight: '#ff0000'
    }
  },
  physics: {
    enabled: true,
    repulsion: {
      centralGravity: .2,
      springLength: 100,
      nodeDistance: 150,
      springConstant: 0.05
    },
    minVelocity: .5,
    stabilization: {
      enabled: true,
      iterations: 1000,
      updateInterval: 50,
      onlyDynamicEdges: false,
      fit: true,
    },
    solver: 'repulsion',
  },
  layout: {
    randomSeed: 12345,
    improvedLayout: false
  }
}
