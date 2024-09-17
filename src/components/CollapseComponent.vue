<template>
  <div>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseName" aria-expanded="false" aria-controls="collapseName">
    Button with data-bs-target
  </button>

<div class="collapse border" id="collapseName">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
  <div>
    <button class="btn btn-warning">Editar</button>
    <button class="btn btn-danger">Eliminar</button>
  </div>
</div>
</div>
</template>